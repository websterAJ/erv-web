import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "@/styles/Events.css";
import { EVENTOS } from "@/utils/eventos";

const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
};

const Events = () => {
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);

  const handleEventClick = (evento) => {
    setEvent(evento);
  };

  return (
    <section id="eventos" className="events__container">
      <h1 className="events__title">Eventos</h1>

      {EVENTOS.length === 0 ? (
        <div className="events__no-events-wrapper" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '250px' }}>
          <p
            className="events__no-events"
            style={{
              fontSize: '2rem',
              fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
              textAlign: 'center',
              color: '#ffffff',
              fontWeight: 600,
              letterSpacing: '0.5px',
              lineHeight: 1.4,
              margin: 0
            }}
          >
            Actualmente no hay eventos programados.<br />
            Por favor, vuelva a consultar próximamente para conocer las novedades.
          </p>
        </div>
      ) : (
        <div className="events__card__container">
          {EVENTOS.map((evento) => (
            <div className="events__card" key={evento.id}>
              <img src={evento.imagen} alt={evento.titulo} />
              <h1>{evento.titulo}</h1>
              <p>
                <span>Fecha:</span> {evento.fecha}
              </p>
              <p>
                <span>Lugar:</span> {evento.lugar}
              </p>
              <Link
                to={`/evento/${slugify(evento.titulo)}`}
                state={{ evento }}
                onClick={() => handleEventClick(evento)}
              >
                Más Información
              </Link>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Events;
