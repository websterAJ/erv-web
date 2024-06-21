import {
  GET_BANNER,
  GET_GALLERY,
  GET_PRODUCTS,
  GET_CATEGORIES,
  GET_CART,
  GET_ORDERS,
} from "./action-type";

const initialState = {
  banner: [],
  galeria: [],
  productos: [],
  categorias: [],
  carrito: [],
  pedidos: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BANNER:
      return {
        ...state,
        banner: action.payload,
      };
    case GET_GALLERY:
      return {
        ...state,
        galeria: action.payload,
      };
    case GET_PRODUCTS:
      return {
        ...state,
        productos: action.payload,
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categorias: action.payload,
      };
    case GET_CART:
      return {
        ...state,
        carrito: action.payload,
      };
    case GET_ORDERS:
      return {
        ...state,
        pedidos: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
