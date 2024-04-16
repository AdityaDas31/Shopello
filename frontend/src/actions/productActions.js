import {
    NEW_PRODUCT_REQUEST,
    NEW_PRODUCT_SUCCESS,
    NEW_PRODUCT_FAIL,
    ADMIN_PRODUCT_SUCCESS,
    ADMIN_PRODUCT_REQUEST,
    ADMIN_PRODUCT_FAIL,
    ALL_PRODUCTS_FAIL,
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    PRODUCT_APPROVE_REQUEST,
    PRODUCT_APPROVE_SUCCESS,
    PRODUCT_APPROVE_FAIL,
    CLEAR_ERRORS,
    PRODUCT_AVAILABLE_REQUEST,
    PRODUCT_AVAILABLE_FAIL,
    PRODUCT_AVAILABLE_SUCCESS,
    SLIDER_PRODUCTS_REQUEST,
    SLIDER_PRODUCTS_SUCCESS,
    SLIDER_PRODUCTS_FAIL,
} from '../constants/productConstants';
import axios from 'axios';



// Add New Product

export const createProduct = (productData) => async (dispatch) => {
    try {
        dispatch({ type: NEW_PRODUCT_REQUEST });

        const config = {
            headers: { "Content-Type": "application/json" },
        };

        // const { data } = await axios.post(`http://localhost:5000/api/v1/product/admin/product/new`, productData, config);
        const { data } = await axios.post(`/api/v1/product/admin/product/new`, productData, config);

        dispatch({
            type: NEW_PRODUCT_SUCCESS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: NEW_PRODUCT_FAIL,
            payload: error.response.data.message,
        });
    }
}

// Get All Product -- Admin

export const getAdminProduct = () => async (dispatch) => {
    try {
        dispatch({ type: ADMIN_PRODUCT_REQUEST });

        // const { data } = await axios.get('http://localhost:5000/api/v1/product/admin/products');
        const { data } = await axios.get('/api/v1/product/admin/products');

        dispatch({
            type: ADMIN_PRODUCT_SUCCESS,
            payload: data.products,
        });
    } catch (error) {
        dispatch({
            type: ADMIN_PRODUCT_FAIL,
            payload: error.response.data.message,
        });
    }
}

// Get All Product

export const getProducts = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_PRODUCTS_REQUEST });

        // const { data } = await axios.get(`http://localhost:5000/api/v1/product/products`);
        const { data } = await axios.get(`/api/v1/product/products`);

        dispatch({
            type: ALL_PRODUCTS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: ALL_PRODUCTS_FAIL,
            payload: error.response.data.message,
        });
    }
}

// Approve Product

export const approveProduct = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_APPROVE_REQUEST });

        const { data } = await axios.put(`/api/v1/product/admin/approve/${id}`);

        dispatch({
            type: PRODUCT_APPROVE_SUCCESS,
            payload: data.success,
        });

    } catch (error) {
        dispatch({
            type: PRODUCT_APPROVE_FAIL,
            payload: error.response.data.message,
        })
    }
}

// Available Product

export const availableProduct = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_AVAILABLE_REQUEST });

        const { data } = await axios.put(`/api/v1/product/admin/available/${id}`);

        dispatch({
            type: PRODUCT_AVAILABLE_SUCCESS,
            payload: data.success,
        });

    } catch (error) {
        dispatch({
            type: PRODUCT_AVAILABLE_FAIL,
            payload: error.response.data.message,
        })
    }
}

// Get All Products ---PRODUCT SLIDER
export const getSliderProducts = () => async (dispatch) => {
    try {
        dispatch({ type: SLIDER_PRODUCTS_REQUEST });

        const { data } = await axios.get('/api/v1/product/products/all');

        dispatch({
            type: SLIDER_PRODUCTS_SUCCESS,
            payload: data.products,
        });
    } catch (error) {
        dispatch({
            type: SLIDER_PRODUCTS_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS,
    })
}