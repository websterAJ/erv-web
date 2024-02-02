import {GET_ALL_BANNER,GET_ALL_EVENTOS,GET_ALL_BLOG,GET_ALL_GALERIA}  from "./action-type";
const initialState = {
    post: [],
    banners: [],
    eventos:[],
    galeria:[]
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_GALERIA:
            return {
                ...state,
                galeria: action.payload.data
            }
        case GET_ALL_BANNER:
            return {
                ...state,
                banners: action.payload.data
            }
        case GET_ALL_EVENTOS:
            return {
                ...state,
                eventos: action.payload.data
            }
        case GET_ALL_BLOG:
            return {
                ...state,
                post: action.payload.data
            }
        default:
            return state;
    }
};

export default rootReducer;
