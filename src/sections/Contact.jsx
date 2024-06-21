import React from "react";

import { FaMapLocationDot } from "react-icons/fa6";
import { TbMailOpenedFilled } from "react-icons/tb";

import "@/styles/Contact.css";

const Contact = () => {
  return (
    <>
      <section id="contacto" className="contact__container">
        <h1 className="contact__title">Contacto</h1>

        <div className="contact">
          <div className="contact__form__container">
            <h1 className="contact__form__title">Formulario de contacto</h1>
            <form action="">
              <div className="contact__form__input__container">
                <input
                  type="text"
                  placeholder="Nombre"
                  className="contact__form__input"
                />
                <label className="contact__form__label">Nombre</label>
              </div>

              <div className="contact__form__input__container">
                <input
                  type="text"
                  placeholder="Apellido"
                  className="contact__form__input"
                />
                <label className="contact__form__label">Apellido</label>
              </div>

              <div className="contact__form__input__container">
                <input
                  type="text"
                  placeholder="Asunto"
                  className="contact__form__input"
                />
                <label className="contact__form__label"> Asunto</label>
              </div>

              <div className="contact__form__input__container">
                <textarea
                  type="text"
                  placeholder="Mensaje"
                  className="contact__form__textarea"
                ></textarea>
                <label className="contact__form__label">Mensaje</label>
              </div>

              <button className="contact__form__btn" type="submit">
                Enviar
              </button>
            </form>
          </div>

          <div className="contact__info__container">
            <div className="contact__info">
              <span>
                <FaMapLocationDot className="contact__info__icon" />
                Dirección
              </span>
              <a
                className="contact__info__link"
                href="https://maps.app.goo.gl/J1sJE7vVNYAbwWhY9"
                target="_blank"
              >
                Av. Principal de Propatria, Centro Comercial Propatria, Piso 5
                Oficina B3. Caracas, Venezuela
              </a>
            </div>

            <div className="contact__info">
              <span>
                <TbMailOpenedFilled className="contact__info__icon" />
                Correo Electroníco
              </span>
              <a
                className="contact__info__link"
                href="mailto:oficinanacionalerv@hotmail.com"
              >
                oficinanacionalerv@hotmail.com
              </a>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.9609366477434!2d-66.95550482496205!3d10.503742989628881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a5feb30d6a195%3A0x597712611e7b6f72!2sCentro%20Comercial%20Propatria!5e0!3m2!1ses!2sve!4v1706234025882!5m2!1ses!2sve"
              width="100%"
              height="400px"
              frameborder="0"
              style={{ border: 0 }}
              title="Mapa"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
