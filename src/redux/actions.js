import axios from 'axios';
import { GET_ALL_BANNER, GET_ALL_EVENTOS, GET_ALL_BLOG, GET_ALL_GALERIA}  from "./action-type";


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