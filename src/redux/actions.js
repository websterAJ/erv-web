import axios from "axios";
import {
  GET_BANNER,
  GET_GALLERY,
  GET_PRODUCTS,
  GET_CATEGORIES,
  GET_CART,
  GET_ORDERS,
} from "./action-type";

export const getProducts = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/productos");
      dispatch({
        type: GET_PRODUCTS,
        payload: data.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const getCart = (id_user) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/carrito", {
        params: {
          id_user,
        },
      });
      dispatch({
        type: GET_CART,
        payload: data.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const createCart = (users_id) => {
  return async () => {
    try {
      await axios.post("/carrito", {
        users_id,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getGallery = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/galeria");
      dispatch({
        type: GET_GALLERY,
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const getBanner = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/banner");
      dispatch({
        type: GET_BANNER,
        payload: data.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const getCategories = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/categorias");
      dispatch({
        type: GET_CATEGORIES,
        payload: data.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const getOrders = (users_id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/pedido", { params: { users_id } });
      dispatch({
        type: GET_ORDERS,
        payload: data.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};
