import React from "react";
import { FaUser } from "react-icons/fa6";

import "@/styles/UserButton.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const UserButton = () => {
  const [toggle, setToggle] = useState(false);

  const logout = async () => {
    try {
      // const { data } = await axios.get("/auth/logout", {
      //   headers: { Authorization: Cookies.get("token") },
      // });
      Cookies.remove("token");
      Cookies.remove("user");
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div
        className="user-btn__container "
        onClick={() => setToggle((prev) => !prev)}
      >
        <FaUser className="user-btn__icon" />

        <div className={`user-btn__dropdown ${toggle && "toggled"}`}>
          <ul className="user-btn__ul">
            {!Cookies.get("token") ? (
              <>
                <li className="user-btn__li">
                  <Link className="user-btn__link" to="/login">
                    Iniciar Sesíon
                  </Link>
                </li>
                <li className="user-btn__li">
                  <Link className="user-btn__link" to="/registro">
                    Registrarse
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="user-btn__li">
                  <Link
                    to="/panel-de-usuario/cuenta"
                    className="user-btn__link"
                  >
                    Mi Cuenta
                  </Link>
                </li>
                <li className="user-btn__li">
                  <Link
                    to="/panel-de-usuario/pedidos"
                    className="user-btn__link"
                  >
                    Mis Pedidos
                  </Link>
                </li>
                <li className="user-btn__li">
                  <Link to="" className="user-btn__link">
                    Mis Compras
                  </Link>
                </li>
                <button onClick={logout}>Cerrar Sesión</button>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default UserButton;
