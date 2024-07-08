import axios from "axios";
import React, { useState, useEffect } from "react";
import Input from "@/components/Input";

import logo from "@/assets/image/erv_logo.png";

import "@/styles/Login.css";
import { Link } from "react-router-dom";
const Login = () => {
  const [userLogin, setUserLogin] = useState({
    nick: "",
    password: "",
  });

  const login = async (e) => {
    e.preventDefault();
    try {
      const { data: loginData } = await axios.post("/auth/login", {
        nick: userLogin.nick,
        password: userLogin.password,
      });

      document.cookie = `token=${loginData.token}; path=/;`;

      const simulatedUserData = JSON.stringify({
        id: 4,
        name: "Usuario",
        email: "usuario@example.com",
      });

      document.cookie = `user=${simulatedUserData}; path=/;`;

      window.location.href = "/";
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserLogin({
      ...userLogin,
      [name]: value,
    });
  };

  return (
    <div className="login-container">
      <div className="login-banner">
        <img src={logo} alt="" />
      </div>
      <div className="login-form">
        <form onSubmit={login}>
          <label htmlFor="">Usuario</label>
          <input
            type="text"
            name="nick"
            value={userLogin.nick}
            onChange={handleChange}
            placeholder="Ingrese su usuario"
          />

          <label htmlFor="">Contraseña</label>
          <input
            type="password"
            name="password"
            value={userLogin.password}
            onChange={handleChange}
            placeholder="ingrese su contraseña"
          />
          <button type="submit">Ingresar</button>

          <div className="form-links">
            <p>
              ¿No tienes cuenta? <Link to="/registro">Registrate</Link>
            </p>
            <p>
              ¿Olvidaste tu contraseña? <a href="">Recuperar Contraseña</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
