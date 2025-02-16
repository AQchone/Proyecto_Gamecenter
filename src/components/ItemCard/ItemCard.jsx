import { Link } from "react-router-dom"
import "./alinear.css"

const ItemCard = ({item}) => {

    return (
        <div className='col-3 m-2 p-2 alinear shadow rounded  ' style={{ width: '18rem' }}>
            <h3>{item.nombre}</h3>
            <img src={item.img} alt={item.nombre}/>
            <p>{item.descripcion}</p>
            <p>Categoria {item.category}</p>
            <p><strong>Precio: ${item.precio}</strong></p>
            {item.stock <= 10 && <p style={{color: 'red'}}>¡Quedan pocas unidades!</p>}
            <Link to={`/detail/${item.id}`} className='btn btn-primary rounded-pill'>Ver más</Link>
        </div>
    )
}

export default ItemCard