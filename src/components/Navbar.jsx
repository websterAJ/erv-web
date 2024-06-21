import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import logo from "@/assets/image/erv_logo.png";

import {
  FaUser,
  FaCartShopping,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";

import "@/styles/Navbar.css";
import { Link } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";
import UserButton from "./UserButton";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="nav__container">
      <div className="nav__logo">
        <img src={logo} alt="Logo" />
      </div>

      <ul className={`nav__links ${toggle ? "nav__open" : ""}`}>
        <li className="nav__link">
          <HashLink
            smooth
            to="/#inicio"
            onClick={() => setToggle((prev) => !prev)}
          >
            Inicio
          </HashLink>
        </li>
        <li className="nav__link">
          <HashLink
            smooth
            to="/#nosotros"
            onClick={() => setToggle((prev) => !prev)}
          >
            Conocemos
          </HashLink>
        </li>
        <li className="nav__link">
          <HashLink
            smooth
            to="/#eventos"
            onClick={() => setToggle((prev) => !prev)}
          >
            Eventos
          </HashLink>
        </li>
        <li className="nav__link">
          <HashLink
            smooth
            to="/#galeria"
            onClick={() => setToggle((prev) => !prev)}
          >
            Galería
          </HashLink>
        </li>
        <li className="nav__link">
          <HashLink
            smooth
            to="/#blog"
            onClick={() => setToggle((prev) => !prev)}
          >
            Blog
          </HashLink>
        </li>
        <li className="nav__link">
          <HashLink
            smooth
            to="/#contacto"
            onClick={() => setToggle((prev) => !prev)}
          >
            Contactanos
          </HashLink>
        </li>
        <li className="nav__link">
          <HashLink
            smooth
            to="/intendencia"
            onClick={() => setToggle((prev) => !prev)}
          >
            Intendencia
          </HashLink>
        </li>
      </ul>

      <div className="nav__social">
        {/* <ul>
          <li>
            <Link to="">
              <FaFacebookF className="nav__social-icon" />
            </Link>
          </li>
          <li>
            <Link to="">
              <FaXTwitter className="nav__social-icon" />
            </Link>
          </li>
        </ul> */}

        <div className="nav__user">
          <ShoppingCart />
        </div>

        <div className="nav__user">
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
