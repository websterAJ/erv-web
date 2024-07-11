import React, { useState } from "react";

import ArrowPrev from "@/assets/svg/ArrowPrev";
import ArrowNext from "@/assets/svg/ArrowNext";
import Cross from "@/assets/svg/Cross";

import img1 from "@/assets/image/img1.jpg";
import img2 from "@/assets/image/img2.jpg";
import img3 from "@/assets/image/img3.jpg";

import "@/styles/Gallery.css";

const Gallery = () => {
  const IMAGES = [
    {
      src: img1,
      desc: "Destacamento inaugurado en Zona 9 - Lirio de los Valles. 22/06/2024",
    },
    {
      src: img2,
      desc: "7mo Destacamento de la zona 9 El Olivar",
    },
    {
      src: img3,
      desc: "8vo Destacamento Lirio de Los Valles zona 9. 23/06/2024",
    },
  ];

  const [imageToShow, setImageToShow] = useState(null);
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);

  const showImage = (image) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
  };

  const nextImg = (e) => {
    e.stopPropagation();

    let currentImg = IMAGES.findIndex((img) => img.src === imageToShow.src);

    if (currentImg >= IMAGES.length - 1) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = IMAGES[currentImg + 1];
      setImageToShow(nextImage);
    }
  };

  const prevImg = (e) => {
    e.stopPropagation();

    let currentImg = IMAGES.findIndex((img) => img.src === imageToShow.src);

    if (currentImg <= 0) {
      setLightBoxDisplay(false);
    } else {
      let prevImage = IMAGES[currentImg - 1];
      setImageToShow(prevImage);
    }
  };

  return (
    <>
      <section id="galeria" className="gallery__container">
        <h1 className="gallery__title">Galería</h1>

        <div className="grid-gallery">
          {IMAGES.map((image, index) => (
            <div
              key={index}
              className="grid-gallery__item"
              onClick={() => showImage(image)}
            >
              <img className="grid-gallery__image" src={image.src} alt="" />
            </div>
          ))}
        </div>

        {lightboxDisplay && imageToShow ? (
          <div className="lightbox" onClick={() => setLightBoxDisplay(false)}>
            <button
              className="lightbox-btn"
              onClick={() => setLightBoxDisplay(false)}
            >
              <Cross className="lightbox-btn-cross" />
            </button>
            <button className="lightbox-btn-prev" onClick={prevImg}>
              <ArrowPrev className="lightbox-btn-icon" />
            </button>
            <div className="lightbox-img-container">
              <img
                className="lightbox-img"
                src={imageToShow.src}
                onClick={(e) => e.stopPropagation()}
              ></img>
              <p className="lightbox-img-desc">{imageToShow.desc}</p>
            </div>
            <button className="lightbox-btn-next" onClick={nextImg}>
              <ArrowNext className="lightbox-btn-icon" />
            </button>
          </div>
        ) : null}
      </section>
    </>
  );
};

export default Gallery;
