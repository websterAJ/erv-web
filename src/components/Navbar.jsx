import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import logo from "@/assets/image/erv_logo.png";
import ShoppingCart from "./ShoppingCart";
import UserButton from "./UserButton";
import Cookies from "js-cookie";
import "@/styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!Cookies.get("token"));
  const [userOpen, setUserOpen] = useState(false);

  useEffect(() => {
    const handleCookieChange = () => {
      setIsLoggedIn(!!Cookies.get("token"));
    };

    const interval = setInterval(handleCookieChange, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="nav__container">
      <div className="nav__logo">
        <img src={logo} alt="Logo" />
      </div>

      <ul className={`nav__links ${toggle ? "nav__open" : ""}`}>
        <li
          className="nav__link nav-user"
          onClick={() => setUserOpen((prev) => !prev)}
        >
          <p>Mi Cuenta</p>
          <div className={`nav-user-links ${!userOpen ? "user-open" : ""}`}>
            <Link to="/login" onClick={() => setToggle(false)}>
              Iniciar Sesión
            </Link>
            <Link to="/registro" onClick={() => setToggle(false)}>
              Registrarse
            </Link>
          </div>
        </li>
        <li className="nav__link">
          <HashLink smooth to="/#inicio" onClick={() => setToggle(false)}>
            Inicio
          </HashLink>
        </li>
        <li className="nav__link">
          <HashLink smooth to="/#nosotros" onClick={() => setToggle(false)}>
            Conocemos
          </HashLink>
        </li>
        <li className="nav__link">
          <HashLink smooth to="/#eventos" onClick={() => setToggle(false)}>
            Eventos
          </HashLink>
        </li>
        <li className="nav__link">
          <HashLink smooth to="/#galeria" onClick={() => setToggle(false)}>
            Galería
          </HashLink>
        </li>
        <li className="nav__link">
          <HashLink smooth to="/#blog" onClick={() => setToggle(false)}>
            Blog
          </HashLink>
        </li>
        <li className="nav__link">
          <HashLink smooth to="/#contacto" onClick={() => setToggle(false)}>
            Contactanos
          </HashLink>
        </li>
        <li className="nav__link">
          <HashLink smooth to="/intendencia" onClick={() => setToggle(false)}>
            Intendencia
          </HashLink>
        </li>
      </ul>

      <div className="nav__social">
        {isLoggedIn && (
          <div className="nav__user">
            <ShoppingCart />
          </div>
        )}

        <div className="nav__user nav-user-btn">
          <UserButton />
        </div>

        <div className="nav__button" onClick={() => setToggle((prev) => !prev)}>
          <div className="nav__toggle">
            <div className="nav__inner">
              <span className={`${toggle ? "nav__toggled" : ""}`}></span>
              <span className={`${toggle ? "nav__toggled" : ""}`}></span>
              <span className={`${toggle ? "nav__toggled" : ""}`}></span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
