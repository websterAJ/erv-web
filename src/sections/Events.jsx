import React from "react";
import { Link } from "react-router-dom";

import evento1 from "@/assets/image/evento1.jpg";

import "@/styles/Events.css";

const Events = () => {
  return (
    <>
      <section id="eventos" className="events__container">
        <h1 className="events__title">Eventos</h1>

        <div className="events__card__container">
          <div className="events__card">
            <img className="" src={evento1} alt="" />
            <h1>Una generación que busca "SU ROSTRO"</h1>
            <p>
              <span>Campamento Zonal 2024</span>
            </p>
            <p>
              <span>Fecha:</span> del 15 al 18 de Agosto
            </p>
            <p>
              <span>Lugar:</span> Ciudad Vacacional Los Caracas
            </p>
            <Link to="/evento">Más Información</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;
