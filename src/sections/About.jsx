import React from "react";

import pioneros from "@/assets/image/pioneros.png";
import brijer from "@/assets/image/brijer.png";
import erv from "@/assets/image/erv_logo.png";

import "@/styles/About.css";

const About = () => {
  const data = [
    {
      title: "Comandante General",
      name: "Nombre",
      image:
        "https://st.depositphotos.com/1770836/1372/i/450/depositphotos_13720689-stock-photo-young-businesswoman.jpg",
    },
    {
      title: "Comandante Masculino",
      name: "Nombre",
      image:
        "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
    },
    {
      title: "Comandante Femenino",
      name: "Nombre",
      image:
        "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.1518270500.1717459200&semt=sph",
    },
    {
      title: "Secretario de Acta",
      name: "Nombre",
      image:
        "https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
    },
    {
      title: "Secretario de Finanzas",
      name: "Nombre",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBQcRtWVDjSpn8k9DDCETUsh-LL3HVJGDMaQ&s",
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
