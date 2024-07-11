import React from "react";

import pioneros from "@/assets/image/pioneros.png";
import brijer from "@/assets/image/brijer.png";
import erv from "@/assets/image/erv_logo.png";
import massimo_calderon from "@/assets/image/massimo-calderon.png";
import yudith_sandoval from "@/assets/image/yudith-sandoval.jpg";
import leonardo_mesino from "@/assets/image/leonardo-mesino.jpg";
import kervin_lemus from "@/assets/image/kervin-lemus.jpg";

import "@/styles/About.css";

const About = () => {
  const data = [
    {
      title: "Comandante Nacional",
      name: "Massimo Calderón",
      image: massimo_calderon,
    },
    {
      title: "Comandante Nacional Femenino",
      name: "Yudith Sandoval",
      image: yudith_sandoval,
    },
    {
      title: "Secretario Nacional",
      name: "Leonardo Mesino",
      image: leonardo_mesino,
    },
    {
      title: "Tesorero Nacional",
      name: "Kervin Lemus",
      image: kervin_lemus,
    },
  ];

  return (
    <>
      <section id="nosotros" className="about__container">
        <div className="about__card-container">
          <div className="about__card">
            <img src={pioneros} alt="" />
            <h1>Area Pionero</h1>
            <a href="/">Ingresar</a>
          </div>

          <div className="about__card">
            <img src={brijer} alt="" />
            <h1>Area Brijer</h1>
            <a href="/">Ingresar</a>
          </div>

          <div className="about__card">
            <img src={erv} alt="" />
            <h1>Area BES</h1>
            <a href="/">Ingresar</a>
          </div>
        </div>

        <div className="command__container">
          <h1 className="command__title">Comando Nacional</h1>

          <div className="carousel-container">
            <ul className="carousel-inner">
              {data?.map((element, index) => (
                <li key={index}>
                  <img src={element.image} alt="" />
                  <h1>{element.title}</h1>
                  <h2>{element.name}</h2>
                </li>
              ))}
            </ul>

            <ul className="carousel-inner" aria-hidden="true">
              {data?.map((element, index) => (
                <li key={index}>
                  <img src={element.image} alt="" />
                  <h1>{element.title}</h1>
                  <h2>{element.name}</h2>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
