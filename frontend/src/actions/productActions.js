import {
    NEW_PRODUCT_SUCCESS,
    NEW_PRODUCT_REQUEST,
    NEW_PRODUCT_FAIL,
    ADMIN_PRODUCT_FAIL,
    ADMIN_PRODUCT_REQUEST,
    ADMIN_PRODUCT_SUCCESS,
    APPROVE_PRODUCT_FAIL,
    APPROVE_PRODUCT_REQUEST,
    APPROVE_PRODUCT_SUCCESS,
    CLEAR_ERRORS
} from '../constants/productConstants';
import axios from 'axios';

// Create Product -- Admin

export const createProduct = (productData) => async (dispatch) => {
    try {
        dispatch({ type: NEW_PRODUCT_REQUEST });

        const config = {
            header: { "Content-Type": "application/json" },
        };

        const { data } = await axios.post(
            `/api/v1/product/admin/product/new`,
            productData,
            config,
        );

        dispatch({
            type: NEW_PRODUCT_SUCCESS,
            payload: data,
        });

    } catch (error) {
        dispatch({
            type: NEW_PRODUCT_FAIL,
            payload: error.response.data.message,
        });
    };
};

// Get All Products -- Admin

export const getAdminProduct = () => async (dispatch) => {
    try {
        dispatch({ type: ADMIN_PRODUCT_REQUEST });

        const { data } = await axios.get(`/api/v1/product/admin/products`);

        dispatch({
            type: ADMIN_PRODUCT_SUCCESS,
            payload: data.products,
        })
    } catch (error) {
        dispatch({
            type: ADMIN_PRODUCT_FAIL,
            payload: error.response.data.message,
        });
    }
}

// Approve Product -- Admin

export const approveProduct = (id) => async (dispatch) => {
    try {
        dispatch({ type: APPROVE_PRODUCT_REQUEST });

        const { data } = await axios.put(`/api/v1/product/admin/approve/${id}`);

        dispatch({
            type: APPROVE_PRODUCT_SUCCESS,
            payload: data.success,
        });

    } catch (error) {
        dispatch({
            type: APPROVE_PRODUCT_FAIL,
            payload: error.response.data.message,
        });
    };
};


// Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS,
    })
}