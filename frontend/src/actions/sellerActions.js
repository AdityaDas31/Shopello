import {
    APPLY_SELLER_REQUEST,
    APPLY_SELLER_SECCESS,
    APPLY_SELLER_FAIL,
    CLEAR_ERRORS,
    ADMIN_APPLICATION_REQUEST,
    ADMIN_APPLICATION_SUCCESS,
    ADMIN_APPLICATION_FAIL,
    APPLICATION_DETAILS_REQUEST,
    APPLICATION_DETAILS_SUCCESS,
    APPLICATION_DETAILS_FAIL,
    UPDATE_APPLICATION_STATUS_REQUEST,
    UPDATE_APPLICATION_STATUS_SUCCESS,
    UPDATE_APPLICATION_STATUS_FAIL,
} from '../constants/sellerConstants';
import axios from "axios";

// Apply Seller 

export const  applyForSelling = (formData) => async(dispatch) =>{
    try {
        dispatch({ type: APPLY_SELLER_REQUEST });

        const config = {
            headers: { "Content-Type": "multipart/form-data" },
        };

        const { data } = await axios.post(`/api/v1/seller/apply-seller`, formData, config);

        dispatch({
            type: APPLY_SELLER_SECCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: APPLY_SELLER_FAIL,
            payload: error.response.data.message,
        });
    }
}

// Get All Application --- Admin

export const getAllApplication = () => async(dispatch) =>{
    try {
        dispatch({ type: ADMIN_APPLICATION_REQUEST });

        const { data } = await axios.get(`/api/v1/seller/admin/get-applications`)
        dispatch({
            type: ADMIN_APPLICATION_SUCCESS,
            payload: data.applications
        })
    } catch (error) {
        dispatch({
            type: ADMIN_APPLICATION_FAIL,
            payload: error.response.data.message,
        })
    }
}

// Get Application Details --- Admin

export const getApplicationDetails = (id) => async (dispatch) =>{
    try {
        dispatch({ type: APPLICATION_DETAILS_REQUEST });

        const { data } = await axios.get(`/api/v1/seller/admin/application/${id}`);

        dispatch({
            type: APPLICATION_DETAILS_SUCCESS,
            payload:data.application,
        });
    } catch (error) {
        dispatch({
            type: APPLICATION_DETAILS_FAIL,
            payload: error.response.data.message,
        });
    }
}

// Update Applicaton Status --- Admin

export const updateStatus = (id, applicationData) => async (dispatch) =>{
    try {
        dispatch({ type: UPDATE_APPLICATION_STATUS_REQUEST });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        }

        const { data } = await axios.put(
            `/api/v1/seller/admin/application/${id}`,
            applicationData,
            config
        );

        dispatch({
            type: UPDATE_APPLICATION_STATUS_SUCCESS,
            payload: data.success,
        });
    } catch (error) {
        dispatch({
            type: UPDATE_APPLICATION_STATUS_FAIL,
            payload: error.response.data.message,
        });
    }
}



// Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS,
    })
}