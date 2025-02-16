import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Navigate } from "react-router-dom";
import {
  collection,
  getDoc,
  addDoc,
  getDocs,
  writeBatch,
  query,
  where,
  documentId,
  doc,
} from "firebase/firestore";
import { db } from "../../firebase/config";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const schema = Yup.object().shape({
  nombre: Yup.string()
    .required("Este campo es requerido")
    .min(3, "El nombre es muy corto")
    .max(20, "El nombre es demasiado largo"),
  direccion: Yup.string()
    .required("Este campo es requerido")
    .min(6, "La direccion es muy corta")
    .max(20, "La direccion es demasiado larga"),
  email: Yup.string()
    .email("El email no es válido")
    .required("Este campo es requerido"),
});

const Checkout = () => {
  const { cart, totalCompra, emptyCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

  const generarOrden = async (values) => {
    const orden = {
      client: values,
      items: cart.map((item) => ({
        id: item.id,
        nombre: item.nombre,
        cantidad: item.cantidad,
      })),
      total: totalCompra(),
      fyh: new Date(),
    };

    const batch = writeBatch(db);
    const productosRef = collection(db, "productos");
    const ordersRef = collection(db, "orders");

    const promesas = cart.map((item) => {
      const ref = doc(productosRef, item.id);
      return getDoc(ref);
    });

    const productos = await Promise.all(promesas);

    const outOfStock = [];

    productos.forEach((doc) => {
      const item = cart.find((i) => i.id === doc.id);
      const stock = doc.data().stock;

      if (stock >= item.cantidad) {
        batch.update(doc.ref, {
          stock: stock - item.cantidad,
        });
      } else {
        outOfStock.push(item);
      }
    });

    if (outOfStock.length === 0) {
      addDoc(ordersRef, orden).then((doc) => {
        batch.commit();
        setOrderId(doc.id);
        emptyCart();
      });
    } else {
      console.log(outOfStock);
      alert("Hay items sin stock");
    }
  };

  if (orderId) {
    return (
      <div className="container my-5">
        <h2>Tu compra se registró exitosamente!</h2>
        <hr />
        <p>Guardá tu número de orden: {orderId}</p>

        <Link to="/">Volver</Link>
      </div>
    );
  }

  if (cart.length === 0) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container my-5">
      <h2>Checkout</h2>
      <hr />

      <Formik
        initialValues={{
          nombre: "",
          direccion: "",
          email: "",
        }}
        validationSchema={schema}
        onSubmit={generarOrden}
      >
        {() => (
          <Form>
            <Field name="nombre" type="text" className="form-control my-2" />
            <ErrorMessage name="nombre" component={"p"} />
            <Field name="direccion" type="text" className="form-control my-2" />
            <ErrorMessage name="direccion" component={"p"} />
            <Field name="email" type="email" className="form-control my-2" />
            <ErrorMessage name="email" component={"p"} />

            <button className="btn btn-primary rounded-pill" type="submit">
              Enviar
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Checkout;
