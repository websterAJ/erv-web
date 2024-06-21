import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { getCart } from "@/redux/actions";

import { GoDash, GoPlus } from "react-icons/go";

import "@/styles/ShopCard.css";
import { FaCheck, FaSpinner } from "react-icons/fa6";
import Loader from "./Loader";
import CheckMark from "./CheckMark";

const ShopCard = ({ id, imagen, titulo, descripcion, precio }) => {
  const dispatch = useDispatch();

  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const addProductToCart = async (
    producto_id,
    carrito_id,
    cantidad,
    subtotal
  ) => {
    setLoading(true);
    try {
      await axios.post("/carrito/add", {
        producto_id,
        carrito_id,
        cantidad,
        subtotal,
      });
      setCount(1);
      dispatch(getCart(2));
      setSuccess(true);
      setTimeout(() => setSuccess(false), 1000);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

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
            onClick={() => addProductToCart(id, 4, count, precio)}
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
      </div>
    </>
  );
};

export default ShopCard;
