import "./Navbar.scss";
import logo2 from "../../assets/react3.svg";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./arial.scss";

export const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <header className="header">
      <div className="header__container">
        <img className="logosvg" src={logo2} alt="LOGO" />

        <nav className="navbar">
          <Link to="/" className="navbar__link arial">
            Inicio
          </Link>
          <Link to="/productos/XboxSeriesX" className="navbar__link arial">
            Xbox Series X
          </Link>
          <Link to="/productos/NintendoSwitch" className="navbar__link arial">
            Nintendo Switch
          </Link>
          <Link to="/productos/PlayStation5" className="navbar__link arial">
            Playstation 5
          </Link>
        </nav>

        <div className="logcontainer">
          <p>Bienvenido {user.email}</p>
          <p></p>
          <button className="btn btn-success">
            <CartWidget />
          </button>
        </div>
        <p></p>
        <button className="btn btn-danger" onClick={logout}>
          Logout
        </button>
      </div>
    </header>
  );
};
