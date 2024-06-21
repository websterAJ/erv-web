import { getOrders, getProducts } from "@/redux/actions";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { formatDate } from "@/utils/formatDate";

import OrderDetail from "./OrderDetail";
import OrderForm from "./OrderForm";

import "@/styles/UserOrders.css";

const UserOrders = () => {
  const dispatch = useDispatch();

  const [groupOrders, setGroupOrders] = useState([]);
  const [openDetail, setOpenDetail] = useState(null);
  const [orderForm, setOrderForm] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openForm, setOpenForm] = useState(false);

  const orders = useSelector((state) => state.pedidos);
  const products = useSelector((state) => state.productos);

  const handleOpenDetail = (order) => {
    setOpenDetail(order);
    setIsModalOpen(true);
  };

  const handleOpenForm = (order) => {
    setOrderForm(order);
    setOpenForm(true);
  };

  const handleCloseDetail = () => {
    setIsModalOpen(false);
    setOpenForm(false);
  };

  useEffect(() => {
    dispatch(getOrders(2));
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    const grouped = orders?.reduce((acc, item) => {
      const product = products.find((p) => p.id === item.producto_id);
      const pedido = acc.find((i) => i.pedidos_id === item.pedidos_id);

      if (pedido) {
        pedido.productos.push({
          id: item.producto_id,
          cantidad: item.cantidad,
          subtotal: item.subtotal,
          total: item.total,
          nombre: product?.nombre,
          imagen: product?.imagen,
        });
      } else {
        acc.push({
          ...item,
          productos: [
            {
              id: item.producto_id,
              cantidad: item.cantidad,
              subtotal: item.subtotal,
              total: item.total,
              nombre: product?.nombre,
              imagen: product?.imagen,
            },
          ],
        });
      }

      return acc;
    }, []);
    setGroupOrders(grouped);
  }, [orders, products]);

  return (
    <>
      <div className="order__container">
        <h1>Pedidos</h1>
        <div className="card__container">
          {groupOrders?.map((order) => {
            return (
              <div className="card" key={order.id}>
                <div className="card__header">
                  <div className="box_1">
                    <p>Orden #{order.id}</p>
                    <span>Pendiente</span>
                  </div>

                  <div className="box_2">
                    <div className="box_date">
                      <p>Fecha</p>
                      <span>{formatDate(order.fecha)}</span>
                    </div>

                    <div className="box_total">
                      <p>Total a Pagar</p>
                      <span>$ {order.total}</span>
                    </div>
                  </div>
                </div>

                <div className="card_body">
                  <button
                    className="card_btn"
                    onClick={() => handleOpenForm(order)}
                  >
                    Pagar
                  </button>

                  <button
                    className="card_btn"
                    onClick={() => handleOpenDetail(order?.productos)}
                  >
                    Detalle
                  </button>
                  <button className="card_btn">Cancelar</button>
                </div>
                <OrderForm
                  openForm={openForm}
                  close={handleCloseDetail}
                  open={handleOpenForm}
                  order={orderForm}
                />
              </div>
            );
          })}
          <OrderDetail
            order={openDetail}
            onClose={handleCloseDetail}
            isModalOpen={isModalOpen}
          />
        </div>
      </div>
    </>
  );
};

export default UserOrders;
