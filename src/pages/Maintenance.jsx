import React from "react";
import "@/styles/Maintenance.css";
import logo from "@/assets/image/erv_logo.png";

const Maintenance = () => {
  return (
    <div className="maintenance__wrapper">
      <div className="maintenance__card">
        <img src={logo} alt="ERV Logo" className="maintenance__logo" />
        <h1 className="maintenance__title">Sitio en mantenimiento</h1>
        <p className="maintenance__subtitle">
          Estamos mejorando la experiencia. Volveremos pronto con novedades y
          rutas para explorar.
        </p>
        <div className="maintenance__theme">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            width="140"
            height="140"
            aria-hidden
          >
            <path
              fill="#2f855a"
              d="M32 6l14 22H18z"
            />
            <path
              fill="#22543d"
              d="M8 56c6-8 14-18 24-18s18 10 24 18H8z"
            />
            <circle cx="48" cy="14" r="4" fill="#f6ad55" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
