import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCart } from "@/redux/actions";

import Cookies from "js-cookie";
import { Toaster } from "sonner";
import { toast } from "sonner";

import { GoDash, GoPlus } from "react-icons/go";

import Loader from "./Loader";
import CheckMark from "./CheckMark";

import "@/styles/ShopCard.css";
import { useEffect } from "react";

const ShopCard = ({ id, imagen, titulo, descripcion, precio, nombre }) => {
  const dispatch = useDispatch();

  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [userData, setUserData] = useState(null);

  const addProductToCart = async (
    producto_id,
    carrito_id,
    cantidad,
    subtotal
  ) => {
    setLoading(true);
    try {
      const { data } = await axios.post("/carrito/add", {
        producto_id,
        carrito_id,
        cantidad,
        subtotal,
      });

      if (data.status !== "error") {
        setCount(1);
        dispatch(getCart(2));
        setSuccess(true);
        setTimeout(() => setSuccess(false), 1000);
        toast.success(`Se agrego "${nombre}" al carrito`);
      } else {
        toast.error("No has iniciado sesión");
      }
    } catch (error) {
      setSuccess(false);
      toast.error("No has iniciado sesión");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const cookieData = Cookies.get("user");
    if (cookieData) {
      try {
        const parsedData = JSON.parse(cookieData);
        setUserData(parsedData);
      } catch (error) {
        console.error("Error al analizar la cookie:", error);
      }
    }
  }, []);

  return (
    <>
      <div className="shopcard__container">
        <div className="card__header">
          <img src={imagen} alt="" />
        </div>
        <div className="card__body">
          <h1 className="card__body__title">{titulo}</h1>
          <p className="card__body__desc">{descripcion}</p>
          <p className="card__body__price">
            <span>Valor</span>$ {precio}
          </p>
        </div>
        <div className="card__btn__container">
          <button
            className="card__btn"
            onClick={() => addProductToCart(id, userData?.id, count, precio)}
            disabled={loading || success}
          >
            {loading ? (
              <Loader />
            ) : success ? (
              <CheckMark />
            ) : (
              "Agregar al Carrito"
            )}
          </button>

          <div className="card__btn__count">
            <button
              className="card__btn__inner"
              onClick={() => setCount((prevCount) => prevCount - 1)}
              disabled={count === 1}
            >
              <GoDash className="card__btn__icon" />
            </button>
            <p className="card__count">{count}</p>
            <button
              className="card__btn__inner"
              onClick={() => setCount((prevCount) => prevCount + 1)}
            >
              <GoPlus className="card__btn__icon" />
            </button>
          </div>
        </div>
        <Toaster richColors />
      </div>
    </>
  );
};

export default ShopCard;
