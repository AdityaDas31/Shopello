import {
    APPLY_SELLER_REQUEST,
    APPLY_SELLER_SECCESS,
    APPLY_SELLER_RESET,
    APPLY_SELLER_FAIL,
    CLEAR_ERRORS,
    ADMIN_APPLICATION_REQUEST,
    ADMIN_APPLICATION_SUCCESS,
    ADMIN_APPLICATION_FAIL,
    APPLICATION_DETAILS_REQUEST,
    APPLICATION_DETAILS_FAIL,
    APPLICATION_DETAILS_SUCCESS,
    REMOVE_APPLICATION_DETAILS,
    UPDATE_APPLICATION_STATUS_REQUEST,
    UPDATE_APPLICATION_STATUS_SUCCESS,
    UPDATE_APPLICATION_STATUS_FAIL,
    UPDATE_APPLICATION_STATUS_RESET,
} from '../constants/sellerConstants';
import { GET_USER_FAILD, GET_USER_REQUEST, GET_USER_SUCCESS } from '../constants/userConstants';

export const applySellerReducer = (state = { seller: {} }, action) => {
    switch (action.type) {
        case APPLY_SELLER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case APPLY_SELLER_SECCESS:
            return {
                loading: false,
                success: action.payload.success,
                seller: action.payload.seller
            };
        case APPLY_SELLER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case APPLY_SELLER_RESET:
            return {
                ...state,
                success: false,
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }
}

export const applicationReducer = (state = { applications: [] }, action) => {
    switch (action.type) {
        case ADMIN_APPLICATION_REQUEST:
            return {
                loading: true,
                applications: []
            };
        case ADMIN_APPLICATION_SUCCESS:
            return {
                loading: false,
                applications: action.payload,
            }
        case ADMIN_APPLICATION_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
}

export const applicationDetailsReducer = (state = { application: {} }, { type, payload }) => {

    switch (type) {
        case APPLICATION_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case APPLICATION_DETAILS_SUCCESS:
            return {
                loading: false,
                application: payload,
            };
        case APPLICATION_DETAILS_FAIL:
            return {
                loading: false,
                error: payload,
            };
        case REMOVE_APPLICATION_DETAILS:
            return {
                ...state,
                application: {},
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
}

export const applicationStatusReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case UPDATE_APPLICATION_STATUS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case UPDATE_APPLICATION_STATUS_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: payload,
            };
        case UPDATE_APPLICATION_STATUS_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            }
        case UPDATE_APPLICATION_STATUS_RESET:
            return {
                ...state,
                isUpdated: false,
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
}

// get user reducer

export const getUserReducer = (state = { user: [] }, { type, payload }) => {

    switch (type) {
        case GET_USER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_USER_SUCCESS:
            return {
                loading: false,
                user: payload,
            };
        case GET_USER_FAILD:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
}