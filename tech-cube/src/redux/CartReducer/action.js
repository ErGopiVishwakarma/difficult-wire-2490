import axios from 'axios';
import { ADD_PAYMENT_DETAILS, ADD_TO_CART, GET_CART_SERVER_REQUEST, GET_CART_SERVER_SUCCESS, GET_CART_SERVER_FAILD, PLACE_ORDER_FAILURE, PLACE_ORDER_REQUEST, PLACE_ORDER_SUCCESS, UPDATE_CART } from './actionType';






export const getCartData = () => (dispatch) => {
    const data = JSON.parse(localStorage.getItem('cart') || '[]');
    dispatch({ type: ADD_TO_CART, payload: data });
}

export const updateCartFn = (data) => (dispatch) => {
    localStorage.setItem('cart', JSON.stringify(data));
    dispatch({ type: UPDATE_CART, payload: data });
}

export const updatePaymentMethod = (paymentDetails) => (dispatch) => {
    dispatch({ type: ADD_PAYMENT_DETAILS, payload: paymentDetails })
}

export const getCartServerdata = () => (dispatch) => {
    dispatch({ type: GET_CART_SERVER_REQUEST })
    axios.get('http://localhost:8080/cart').then((res) => {
        dispatch({ type: GET_CART_SERVER_SUCCESS, payload: res.data })
    })
        .catch((err) => dispatch({ type: GET_CART_SERVER_FAILD }))
}