import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createCart, getCart } from "@/redux/actions";

import { FaCartShopping, FaRegTrashCan } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import { GoDash, GoPlus } from "react-icons/go";

import "@/styles/ShoppingCart.css";
import Loader from "./Loader";

const ShoppingCart = () => {
  const [toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.carrito);

  const cantItems = cart?.reduce((acc, val) => acc + val.cantidad, 0);

  const subtotal = cart
    ?.reduce((acc, val) => acc + parseFloat(val.subtotal), 0)
    .toFixed(2);

  const total = (parseFloat(cantItems) * parseFloat(subtotal)).toFixed(2);

  const generateOrder = async (users_id, carrito_id) => {
    try {
      const { data } = await axios.post("/pedido", {
        users_id,
        carrito_id,
      });
      dispatch(createCart(users_id));
      dispatch(getCart(users_id));
    } catch (error) {
      console.error(error);
    }
  };

  const deleteProduct = async (producto_id, carrito_id) => {
    try {
      const { data } = await axios.post("/carrito/delete", {
        producto_id,
        carrito_id,
      });
      dispatch(getCart(cart[0]?.users_id));
    } catch (error) {
      console.error(error);
    }
  };

  const changeQuantity = async (
    producto_id,
    carrito_id,
    cantidad,
    subtotal
  ) => {
    setLoading(true);
    try {
      const { data } = await axios.post("/carrito/changecant", {
        producto_id,
        carrito_id,
        cantidad,
        subtotal,
      });
      dispatch(getCart(cart[0]?.users_id));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    dispatch(getCart(2));
  }, [dispatch]);

  return (
    <>
      <button
        className="shopping-cart__button"
        onClick={() => setToggle((prev) => !prev)}
      >
        <FaCartShopping />

        <span>{cart?.length ? cantItems : 0}</span>
      </button>

      <div
        className={toggle ? "shopping-cart__container" : ""}
        onClick={() => setToggle((prev) => !prev)}
      >
        <div
          className={`shopping-cart__inner ${toggle ? "cart-inner__open" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <header className="shopping-cart__header">
            <h1>Mi Carrito</h1>

            <button className="" onClick={() => setToggle((prev) => !prev)}>
              <IoCloseOutline />
            </button>
          </header>

          <div className="shopping-cart__body">
            <div
              className={`${
                loading ? "show__loader" : ""
              } shopping-cart__loader`}
            >
              <Loader width={50} height={50} color={"#2b1c12"} />
            </div>

            {cart?.length ? (
              cart?.map((c) => (
                <div key={c.id} className="shopping-cart__card">
                  <div className="shopping-cart__card__img">
                    <img src={c.imagen} alt="" />
                  </div>

                  <div className="shopping-cart__card__body">
                    <div className="shopping-cart__card__body__inner">
                      <div className="shopping-cart__card__title">
                        <h2>{c.nombre}</h2>
                        <p>$ {c.precio}</p>
                      </div>

                      <div className="shopping-cart__card__buttons__container">
                        <div className="shopping-cart__card__buttons">
                          <button
                            onClick={() =>
                              c.cantidad > 1
                                ? changeQuantity(
                                    c.producto_id,
                                    c.carrito_id,
                                    c.cantidad - 1,
                                    parseFloat(c.subtotal) - c.precio
                                  )
                                : deleteProduct(c.producto_id, c.carrito_id)
                            }
                            disabled={loading}
                          >
                            {c.cantidad === 1 ? (
                              <FaRegTrashCan className="trash__icon" />
                            ) : (
                              <GoDash />
                            )}
                          </button>

                          <span>{c.cantidad}</span>

                          <button
                            onClick={() =>
                              changeQuantity(
                                c.producto_id,
                                c.carrito_id,
                                c.cantidad + 1,
                                parseFloat(c.subtotal) + c.precio
                              )
                            }
                            disabled={loading}
                          >
                            <GoPlus />
                          </button>
                        </div>

                        <div className="shopping-cart__card__btn-delete">
                          <button
                            onClick={() =>
                              deleteProduct(c.producto_id, c.carrito_id)
                            }
                          >
                            <FaRegTrashCan />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h1 className="cart__empty">
                No se agrego ningún producto al carrito
              </h1>
            )}
          </div>

          <div className="shoping-cart__total">
            <div className="shoping-cart__total-total">
              Total <span>${cart?.length ? cart[0]?.total : "0.00"}</span>
            </div>

            <button
              onClick={() =>
                generateOrder(cart[0]?.users_id, cart[0]?.carrito_id)
              }
              disabled={!cart?.length}
            >
              Generar Pago
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
