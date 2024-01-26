import {
    NEW_PRODUCT_SUCCESS,
    NEW_PRODUCT_REQUEST,
    NEW_PRODUCT_FAIL,
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

// Clearing Errors
export const clearErrors = () => async(dispatch)=>{
    dispatch({
        type: CLEAR_ERRORS,
    })
}