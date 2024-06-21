import { Swiper, SwiperSlide } from "swiper/react";
import "@/styles/Header.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Keyboard,
  Scrollbar,
  EffectFade,
  Navigation,
  Pagination,
  Autoplay,
  EffectCreative,
} from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBanner } from "@/redux/actions";

const Header = () => {
  const dispatch = useDispatch();
  const banner = useSelector((state) => state.banner);

  useEffect(() => {
    dispatch(getBanner());
  }, [dispatch]);

  return (
    <>
      <section id="inicio" className="header__container">
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ["-20%", 0, -1],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          navigation={true}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          keyboard={{
            enabled: true,
          }}
          scrollbar={true}
          modules={[
            Autoplay,
            EffectFade,
            Scrollbar,
            Keyboard,
            Navigation,
            Pagination,
            EffectCreative,
          ]}
          className="carousel__container"
        >
          {banner?.map((b) => (
            <SwiperSlide key={b.id}>
              <img src={b.imagen} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Header;
