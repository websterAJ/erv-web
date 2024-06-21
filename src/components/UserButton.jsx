import React from "react";
import { FaUser } from "react-icons/fa6";

import "@/styles/UserButton.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const UserButton = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div
        className="user-btn__container "
        onClick={() => setToggle((prev) => !prev)}
      >
        <FaUser className="user-btn__icon" />

        <div className={`user-btn__dropdown ${toggle && "toggled"}`}>
          <ul className="user-btn__ul">
            <li className="user-btn__li">
              <Link to="/panel-de-usuario/cuenta" className="user-btn__link">
                Mi Cuenta
              </Link>
            </li>
            <li className="user-btn__li">
              <Link to="/panel-de-usuario/pedidos" className="user-btn__link">
                Mis Pedidos
              </Link>
            </li>
            <li className="user-btn__li">
              <Link to="" className="user-btn__link">
                Mis Compras
              </Link>
            </li>
            <button>Cerrar Sesión</button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default UserButton;
