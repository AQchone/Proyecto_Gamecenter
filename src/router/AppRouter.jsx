import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer.jsx";
import { Navbar } from "../components/Navbar/Navbar.jsx";
import ItemDetailContainer from "../components/ItemDetailContainer/itemDetailContainer.jsx";
import Cart from "../components/Cart/Cart.jsx";
import LoginScreen from "../components/LoginScreen/LoginScreen.jsx";
import RegisterScreen from "../components/LoginScreen/RegisterScreen.jsx";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";
import Checkout from "../components/Checkout/Checkout.jsx";

const AppRouter = () => {
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      {user.logged ? (
        <>
          <Navbar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/productos/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<Navigate to={"/"} />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default AppRouter;
