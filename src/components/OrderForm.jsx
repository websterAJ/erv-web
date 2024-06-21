import React, { useState, useEffect } from "react";
import "@/styles/OrderForm.css";
import Input from "./Input";
import axios from "axios";

const OrderForm = ({ openForm, close, order }) => {
  const [dataForm, setDataForm] = useState({
    referencia: "",
    monto: order?.total,
    fecha: "",
    pedido_id: "",
    comprobante: null,
  });

  useEffect(() => {
    setDataForm((prevDataForm) => ({
      ...prevDataForm,
      monto: order?.total,
    }));
  }, [order?.total]);

  const handleChange = ({ name, value }) => {
    setDataForm((prevDataForm) => ({
      ...prevDataForm,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setDataForm((prevDataForm) => ({
      ...prevDataForm,
      comprobante: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("referencia", dataForm.referencia);
      formData.append("pedido_id", order.pedidos_id);
      formData.append("comprobante", dataForm.comprobante);
      formData.append("fecha", new Date().toJSON().slice(0, 10));
      formData.append("monto", dataForm.monto);

      const { data } = await axios.post("/pago", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className={`order-form__container ${openForm ? "open-form" : ""}`}
      onClick={close}
    >
      <div className="order-form__inner" onClick={(e) => e.stopPropagation()}>
        <h1>Informar Pago</h1>
        <form onSubmit={handleSubmit}>
          <Input
            type={"text"}
            placeholder={"Nº de referencia"}
            label={"Nº de referencia"}
            name="referencia"
            value={dataForm.referencia}
            onChange={handleChange}
          />

          <Input
            type={"text"}
            placeholder={"Monto"}
            label={"Monto"}
            name="monto"
            value={dataForm.monto}
            onChange={handleChange}
            disabled={true}
          />

          <input type="file" onChange={handleFileChange} />
          <button type="submit">Enviar</button>
          <button type="button" onClick={close}>
            Cerrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;
