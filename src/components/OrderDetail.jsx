import React from "react";

import { TfiClose } from "react-icons/tfi";

import "@/styles/OrderDetail.css";

const OrderDetail = ({ order, onClose, isModalOpen }) => {
  const total = order?.reduce(
    (acc, val) => acc + parseFloat(val.subtotal) * val.cantidad,
    0
  );

  return (
    <>
      <div
        className={`order-detail__container ${isModalOpen ? "open" : ""}`}
        onClick={onClose}
      >
        <div
          className="order-detail__inner"
          onClick={(e) => e.stopPropagation()}
        >
          <h3>Detalle del Pedido</h3>

          <button onClick={onClose}>
            <TfiClose />
          </button>

          {order?.map((o) => (
            <div className="order-detail__body">
              <img src="" alt="" />
              <div className="body__info">
                <div>
                  <p>{o.nombre}</p>
                  <span>Cantidad {o.cantidad}</span>
                </div>

                <p>$ {(o.subtotal * o.cantidad).toFixed(2)}</p>
              </div>
            </div>
          ))}

          <div className="order-detail__total">
            <span>Total</span>
            <span>$ {total?.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetail;
