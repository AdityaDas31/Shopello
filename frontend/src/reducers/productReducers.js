import {
  NEW_PRODUCT_SUCCESS,
  NEW_PRODUCT_REQUEST,
  NEW_PRODUCT_RESET,
  NEW_PRODUCT_FAIL,
  ADMIN_PRODUCT_FAIL,
  ADMIN_PRODUCT_REQUEST,
  ADMIN_PRODUCT_SUCCESS,
  APPROVE_PRODUCT_FAIL,
  APPROVE_PRODUCT_REQUEST,
  APPROVE_PRODUCT_SUCCESS,
  APPROVE_PRODUCT_RESET,
  AVAILABLE_PRODUCT_FAIL,
  AVAILABLE_PRODUCT_REQUEST,
  AVAILABLE_PRODUCT_SUCCESS,
  AVAILABLE_PRODUCT_RESET,
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  CLEAR_ERRORS,
} from '../constants/productConstants';

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
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const productReducers = (state = { products: [] }, action) => {
  switch (action.type) {
    case ALL_PRODUCT_REQUEST:
    case ADMIN_PRODUCT_REQUEST:
      return {
        loading: true,
        products: [],
      };
    case ALL_PRODUCT_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
      }
    case ADMIN_PRODUCT_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };
    case ALL_PRODUCT_FAIL:
    case ADMIN_PRODUCT_FAIL:
      return {
        loading: false,
        error: action.payload
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

export const productReducer = (state = {}, action) => {
  switch (action.type) {
    case APPROVE_PRODUCT_REQUEST:
    case AVAILABLE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case APPROVE_PRODUCT_SUCCESS:
    case AVAILABLE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        isApproved: action.payload.success,
      };
    case APPROVE_PRODUCT_FAIL:
    case AVAILABLE_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case APPROVE_PRODUCT_RESET:
    case AVAILABLE_PRODUCT_RESET:
      return {
        ...state,
        isApproved: false,
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

export const productDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };
    case PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload
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