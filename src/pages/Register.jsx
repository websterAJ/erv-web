import React from "react";

import "@/styles/Register.css";

const Register = () => {
  return (
    <>
      <div className="register-container">
        <form className="register-form-container">
          <div className="register-form-inner">
            <label>
              <span>Usuario</span>
              <input type="text" placeholder="" />
            </label>

            <label>
              <span>Contraseña</span>
              <input type="text" placeholder="********" />
            </label>
          </div>

          <div className="register-form-inner">
            <label>
              <span>Nombre</span>
              <input type="text" placeholder="" />
            </label>

            <label>
              <span>Apellido</span>
              <input type="text" placeholder="" />
            </label>
          </div>

          <div className="register-form-inner">
            <label>
              <span>Correo Electrónico</span>
              <input
                type="email"
                name=""
                id=""
                placeholder="ejemplo@ejemplo.com"
              />
            </label>

            <label>
              <span>Teléfono</span>
              <input type="text" placeholder="123 456 789" />
            </label>
          </div>

          <button type="submit">Registrarse</button>
        </form>
      </div>
    </>
  );
};

export default Register;
