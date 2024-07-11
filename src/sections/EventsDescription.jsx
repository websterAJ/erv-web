import React from "react";

import evento1 from "@/assets/image/evento1.jpg";

import "@/styles/EventsDescription.css";

const EventsDescription = () => {
  return (
    <>
      <div className="event-description-container">
        <img src={evento1} alt="" />
        <div>
          <h1>Una Generación que busca "SU ROSTRO"</h1>
          <p>Campamento Zonal 2024</p>
          <p>del 15 al 18 de Agosto</p>
          <p>Ciudad Vacacional Los Caracas</p>
        </div>
      </div>
    </>
  );
};

export default EventsDescription;
