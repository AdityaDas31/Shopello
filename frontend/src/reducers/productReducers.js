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
    SLIDER_PRODUCTS_REQUEST,
    SLIDER_PRODUCTS_SUCCESS,
    SLIDER_PRODUCTS_FAIL,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    REMOVE_PRODUCT_DETAILS,
    CLEAR_ERRORS,
    ALL_REVIEWS_REQUEST,
    ALL_REVIEWS_SUCCESS,
    ALL_REVIEWS_FAIL,
    NEW_REVIEW_REQUEST,
    NEW_REVIEW_SUCCESS,
    NEW_REVIEW_FAIL,
    NEW_REVIEW_RESET,
    DELETE_REVIEW_REQUEST,
    DELETE_REVIEW_SUCCESS,
    DELETE_REVIEW_FAIL,
    DELETE_REVIEW_RESET,
    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAIL,
    UPDATE_PRODUCT_RESET,
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
                productsCount: action.payload.productsCount,
                resultPerPage: action.payload.resultPerPage,
                filteredProductsCount: action.payload.filteredProductsCount,
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

export const productDetailsReducer = (state = { product: {} }, { type, payload }) => {
    switch (type) {
        case PRODUCT_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case PRODUCT_DETAILS_SUCCESS:
            return {
                loading: false,
                product: payload,
            };
        case PRODUCT_DETAILS_FAIL:
            return {
                loading: false,
                error: payload,
            };
        case REMOVE_PRODUCT_DETAILS:
            return {
                ...state,
                product: {},
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

// New Review Reducer
export const newReviewReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case NEW_REVIEW_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case NEW_REVIEW_SUCCESS:
            return {
                loading: false,
                success: payload,
            };
        case NEW_REVIEW_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        case NEW_REVIEW_RESET:
            return {
                ...state,
                success: false,
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

// all review reducer

export const productReviewsReducer = (state = { reviews: [] }, { type, payload }) => {

    switch (type) {
        case ALL_REVIEWS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ALL_REVIEWS_SUCCESS:
            return {
                loading: false,
                reviews: payload,
            };
        case ALL_REVIEWS_FAIL:
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

//delete and update review

export const reviewReducer = (state = {}, { type, payload }) => {

    switch (type) {
        case UPDATE_PRODUCT_REQUEST:
        case DELETE_REVIEW_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case UPDATE_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: payload,
            };
        case DELETE_REVIEW_SUCCESS:
            return {
                loading: false,
                isDeleted: payload,
            };
        case UPDATE_PRODUCT_FAIL:
        case DELETE_REVIEW_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        case UPDATE_PRODUCT_RESET:
            return {
                ...state,
                isUpdated: false,
            };
        case DELETE_REVIEW_RESET:
            return {
                ...state,
                isDeleted: false,
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