import {
    NEW_PRODUCT_REQUEST,
    NEW_PRODUCT_SUCCESS,
    NEW_PRODUCT_FAIL,
    NEW_PRODUCT_RESET,
    ADMIN_PRODUCT_SUCCESS,
    ADMIN_PRODUCT_REQUEST,
    ADMIN_PRODUCT_FAIL,
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,
    PRODUCT_APPROVE_REQUEST,
    PRODUCT_APPROVE_SUCCESS,
    PRODUCT_APPROVE_RESET,
    PRODUCT_APPROVE_FAIL,
    PRODUCT_AVAILABLE_REQUEST,
    PRODUCT_AVAILABLE_SUCCESS,
    PRODUCT_AVAILABLE_RESET,
    PRODUCT_AVAILABLE_FAIL,
    CLEAR_ERRORS,
    SLIDER_PRODUCTS_REQUEST,
    SLIDER_PRODUCTS_SUCCESS,
    SLIDER_PRODUCTS_FAIL,
} from '../constants/productConstants';


export const productReducers = (state = { product: [] }, action) => {
    switch (action.type) {
        case ALL_PRODUCTS_REQUEST:
        case ADMIN_PRODUCT_REQUEST:
        case SLIDER_PRODUCTS_REQUEST:
            return {
                loading: true,
                products: [],
            };
        case ALL_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payload.products,
            };
        case ADMIN_PRODUCT_SUCCESS:
        case SLIDER_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payload,
            };
        case ALL_PRODUCTS_FAIL:
        case ADMIN_PRODUCT_FAIL:
        case SLIDER_PRODUCTS_FAIL:
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
    };
};

export const newProductReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case NEW_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case NEW_PRODUCT_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                product: action.payload.product,
            };
        case NEW_PRODUCT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case NEW_PRODUCT_RESET:
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
    };
};

export const productReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_APPROVE_REQUEST:
        case PRODUCT_AVAILABLE_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case PRODUCT_APPROVE_SUCCESS:
            return {
                ...state,
                loading: false,
                isApprove: action.payload.success,
            }
        case PRODUCT_AVAILABLE_SUCCESS:
            return {
                ...state,
                loading: false,
                isAvailable: action.payload.success,
            }
        case PRODUCT_APPROVE_FAIL:
        case PRODUCT_AVAILABLE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case PRODUCT_APPROVE_RESET:
            return {
                ...state,
                isApproved: false,
            }
        case PRODUCT_AVAILABLE_RESET:
            return {
                ...state,
                isAvailable: false,
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