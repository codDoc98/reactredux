import {actionType} from "../constants/action-type"
const initialState = {
    products: [ ],
    product: {}
}
const productReducer = (state = initialState, {type, payload}) =>{
    switch (type) {
        case actionType.SET_PRODUCTS:
            // return [...state.products,payload]   wrong approach
            return {...state, products: payload};
        case actionType.FETCH_PRODUCTS:
            // return [...state.products,payload]   wrong approach
            return {...state, products: payload};

        case actionType.SELECTED_PRODUCT:
            return {...state, product:{...payload}};
            
        case actionType.REMOVE_SELECTED_PRODUCT:
            return {...state,product:{}};
    
        default:
            return state
    }

}
export default productReducer