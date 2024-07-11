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
            <h1>Titulo</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              sunt.
            </p>
            <Link to="/evento">Más Información</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;
