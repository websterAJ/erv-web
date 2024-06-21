import React from "react";
import { useState } from "react";

import ArrowPrev from "@/assets/svg/ArrowPrev";
import ArrowNext from "@/assets/svg/ArrowNext";

import "@/styles/Gallery.css";
import Cross from "@/assets/svg/Cross";

const Gallery = () => {
  const IMAGES = [
    {
      src: "https://imgs.search.brave.com/8jAZFhLnMC4s_4ppedkNSFDv8avg9vDkePH76dsYZyA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90by1ncmF0aXMv/aGllcmJhLXNhbHZh/amUtcXVlLWNyZWNl/LW5hdHVyYWxlemFf/NTM4NzYtMTQ4MTY3/LmpwZz9zaXplPTYy/NiZleHQ9anBn",
    },
    {
      src: "https://content.nationalgeographic.com.es/medio/2018/02/27/playa-de-isuntza-lekeitio__1280x720.jpg",
    },
    {
      src: "https://imgs.search.brave.com/ol-VFYvyTU-ArNLcFQ0MqH53T2FyQPCxE7zVbalSycA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90b3MtcHJlbWl1/bS9jb2xpbmFzLXZl/cmRlcy1hbC1hdGFy/ZGVjZXItdG9zY2Fu/YS1pdGFsaWEtaGVy/bW9zby1wYWlzYWpl/LXZlcmFuby1kZXN0/aW5vLXZpYWplLWZh/bW9zb181NDU2ODkt/MjgwNi5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw",
    },
    {
      src: "https://imgs.search.brave.com/HJR_8EFUMfXcpgg10chKELnlaEbSYQBTrI6dKHs_bNU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90b3MtcHJlbWl1/bS9oZXJtb3NvLWVu/dG9ybm8tcGFpc2Fq/ZS1jYW1wby12ZXJk/ZV8yOTMzMi0xODU1/LmpwZz9zaXplPTYy/NiZleHQ9anBn",
    },
    {
      src: "https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg",
    },
    {
      src: "https://i.pinimg.com/736x/f4/b0/fb/f4b0fb9dbe599df0bbd4e29c56713732.jpg",
    },
    {
      src: "https://st5.depositphotos.com/64145070/64693/i/450/depositphotos_646930840-stock-photo-sunset-ocean-beach-beautiful-seascape.jpg",
    },
  ];

  const [imageToShow, setImageToShow] = useState("");
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);

  const showImage = (image) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
  };

  const nextImg = (e) => {
    e.stopPropagation();

    let currentImg = IMAGES.findIndex((img) => img.src === imageToShow);

    if (currentImg >= IMAGES.length - 1) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = IMAGES[currentImg + 1].src;
      setImageToShow(nextImage);
    }
  };

  const prevImg = (e) => {
    e.stopPropagation();

    let currentImg = IMAGES.findIndex((img) => img.src === imageToShow);

    if (currentImg <= 0) {
      setLightBoxDisplay(false);
    } else {
      let prevImage = IMAGES[currentImg - 1].src;
      setImageToShow(prevImage);
    }
  };

  return (
    <>
      <section id="galeria" className="gallery__container">
        <h1 className="gallery__title">Galería</h1>

        <div className="grid-gallery">
          {IMAGES?.map((image, index) => (
            <div
              key={index}
              class="grid-gallery__item"
              onClick={() => showImage(image.src)}
            >
              <img class="grid-gallery__image" src={image.src} alt="" />
            </div>
          ))}
        </div>

        {lightboxDisplay ? (
          <div className="lightbox" onClick={() => setLightBoxDisplay(false)}>
            <button
              className="lightbox-btn"
              onClick={() => setLightBoxDisplay(false)}
            >
              <Cross className={"lightbox-btn-cross"} />
            </button>
            <button className="lightbox-btn-prev" onClick={prevImg}>
              <ArrowPrev className={"lightbox-btn-icon"} />
            </button>
            <img
              className="lightbox-img"
              src={imageToShow}
              onClick={(e) => e.stopPropagation()}
            ></img>{" "}
            <button className="lightbox-btn-next" onClick={nextImg}>
              <ArrowNext className={"lightbox-btn-icon"} />
            </button>
          </div>
        ) : (
          ""
        )}
      </section>
    </>
  );
};

export default Gallery;
