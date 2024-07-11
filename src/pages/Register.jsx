import React from "react";

import "@/styles/Register.css";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    telefono: "",
    nick: "",
    password: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;

    setFormData(() => {
      return {
        ...formData,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/auth/signup", formData);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="register-container">
        <form className="register-form-container" onSubmit={handleSubmit}>
          <div className="register-form-inner">
            <label>
              <span>Usuario</span>
              <input
                type="text"
                name="nick"
                onChange={handleChange}
                placeholder=""
              />
            </label>

            <label>
              <span>Contraseña</span>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="********"
              />
            </label>
          </div>

          <div className="register-form-inner">
            <label>
              <span>Nombre</span>
              <input
                type="text"
                name="nombre"
                onChange={handleChange}
                placeholder=""
              />
            </label>

            <label>
              <span>Apellido</span>
              <input
                type="text"
                name="apellido"
                onChange={handleChange}
                placeholder=""
              />
            </label>
          </div>

          <div className="register-form-inner">
            <label>
              <span>Correo Electrónico</span>
              <input
                type="email"
                name="correo"
                onChange={handleChange}
                id=""
                placeholder="ejemplo@ejemplo.com"
              />
            </label>

            <label>
              <span>Teléfono</span>
              <input
                type="text"
                name="telefono"
                onChange={handleChange}
                placeholder="123 456 789"
              />
            </label>
          </div>

          <button type="submit">Registrarse</button>
        </form>
      </div>
    </>
  );
};

export default Register;
