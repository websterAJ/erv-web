import axios from 'axios';
import { GET_ALL_BANNER, GET_ALL_EVENTOS, GET_ALL_BLOG, GET_ALL_GALERIA, GET_ALL_PRODUCTO, GET_ALL_CATEGORIAS}  from "./action-type";




export const getAllProductos=()=>{
    return async (dispatch)=>{
        try {
            let { data } = await axios.get('/productos');
            dispatch({
                type:GET_ALL_PRODUCTO,
                payload: data
            })
        } catch (error) {
            console.log(error);
        }
    }
}
export const getAllCategorias=()=>{
    return async (dispatch)=>{
        try {
            let { data } = await axios.get('/categorias');
            dispatch({
                type:GET_ALL_CATEGORIAS,
                payload: data
            })
        } catch (error) {
            console.log(error);
        }
    }
}
export const getAllBanner = ()=>{
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`/banner`);
            dispatch({
                type: GET_ALL_BANNER,
                payload: data
            });
        } catch (error) {
            console.error(error);
        }
    };
}

export const getAllBlog = ()=>{
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`/blog`);
            dispatch({
                type: GET_ALL_BLOG,
                payload: data
            });
        } catch (error) {
            console.error(error);
        }
    };
}

export const getAllEventos = ()=>{
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`/eventos`);
            dispatch({
                type: GET_ALL_EVENTOS,
                payload: data
            });
        } catch (error) {
            console.error(error);
        }
    };
}

export const getAllGaleria = ()=>{
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`/galeria`);
            dispatch({
                type: GET_ALL_GALERIA,
                payload: data
            });
        } catch (error) {
            console.error(error);
        }
    };
}