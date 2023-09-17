import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  OTP_SEND_REQUEST,
  OTP_SEND_SUCCESS,
  OTP_SEND_FAIL,
  OTP_LOGIN_REQUEST,
  OTP_LOGIN_SUCCESS,
  OTP_LOGIN_FAIL,
  CLEAR_ERRORS,
} from '../constants/userConstants';


export const userReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case REGISTER_USER_REQUEST:
    case LOAD_USER_REQUEST:
    case OTP_LOGIN_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };
    case OTP_SEND_REQUEST:
      return {
        loading: false,
        isAuthenticated: false,
      }
    case LOGIN_SUCCESS:
    case REGISTER_USER_SUCCESS:
    case LOAD_USER_SUCCESS:
    case OTP_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };

    case OTP_SEND_SUCCESS:
      return {
        loading: false,
        isAuthenticated: false,
        user: action.payload,
      }
    case LOGOUT_SUCCESS:
      return {
        loading: false,
        user: null,
        isAuthenticated: false,
      };
    case LOGIN_FAIL:
    case REGISTER_USER_FAIL:
    case OTP_SEND_FAIL:
    case OTP_LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };

    case LOAD_USER_FAIL:
      return {
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };

    case LOGOUT_FAIL:
      return {
        ...state,
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
};

