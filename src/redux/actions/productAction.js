import axios from "../../apis/productApis"
import { actionType } from "../constants/action-type"
export const setProducts = (products) => {
    return {
        type: actionType.SET_PRODUCTS,
        payload: products
    }
}
export const selectedProduct = (product) => {
    return {
        type: actionType.SELECTED_PRODUCT,
        payload: product
    }
}

export const removeSelectedProduct = (products) => {
    return {
        type: actionType.REMOVE_SELECTED_PRODUCT,
    }
}
export const  fetchProducts = () => {
    return async function (dispatch, getState) {
        const response = await axios.get("/products")
        dispatch({
            type: actionType.FETCH_PRODUCTS,
            payload: response.data})
    }
    
}