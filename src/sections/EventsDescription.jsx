import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import "@/styles/EventsDescription.css";

const EventsDescription = () => {
  const location = useLocation();
  const { evento } = location.state || {};

  useEffect(() => {
    setTimeout(() => {
      window.scroll(0, 0);
    }, 0);
  }, []);

  return (
    <>
      <div className="event-description-container">
        <img src={evento?.imagen} alt="" />
        <div>
          <h1>{evento?.titulo}</h1>
          <p>{evento?.fecha}</p>
          <p>{evento?.lugar}</p>
        </div>
      </div>
    </>
  );
};

export default EventsDescription;
