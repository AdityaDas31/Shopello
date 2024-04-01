import {
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
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
import axios from 'axios';

// Register

export const register = (userData) => async (dispatch) => {
    try {
        dispatch({ type: REGISTER_USER_REQUEST });

        const config = { headers: { "Content-Type": "multipart/form-data" } };

        // const { data } = await axios.post('http://localhost:5000/api/v1/user/register', userData, { withCredentials: true } , config);
        const { data } = await axios.post('/api/v1/user/register', userData, config);
        
        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: data.user,
        });

    } catch (error) {
        dispatch({          
            type: REGISTER_USER_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Login User

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST })

        const config = { headers: { "Content-Type": "application/json" } };

        // const { data } = await axios.post(`http://localhost:5000/api/v1/user/login`, { email, password, withCredentials: true }, config);
        const { data } = await axios.post(`/api/v1/user/login`, { email, password }, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: data.user
        })
    } catch (error) {
        dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
    }
}

// Load User 

export const loadUser = () => async (dispatch) => {
    try {
        dispatch({ type: LOAD_USER_REQUEST });

        // const { data } = await axios.get(`http://localhost:5000/api/v1/user/profile`, { withCredentials: true });
        const { data } = await axios.get(`/api/v1/user/profile`);

        dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
    } catch (error) {
        dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message });
    }
}


// logout

export const logout = () => async (dispatch) => {
    try {
        // await axios.get(`http://localhost:5000/api/v1/user/logout`);
        await axios.get(`/api/v1/user/logout`);

        dispatch({ type: LOGOUT_SUCCESS });
    } catch (error) {
        dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message });
    }
};
 
// Send OTP

export const sendOtp = (email) => async(dispatch) => {
    try {
        dispatch({ type: OTP_SEND_REQUEST });

        const config = { headers: { "Content-Type": "application/json" } };

        // const { data } = await axios.post(`http://localhost:5000/api/v1/user/sendotp`, { email }, config);
        const { data } = await axios.post(`/api/v1/user/sendotp`, { email }, config);

        dispatch({ 
            type: OTP_SEND_SUCCESS, 
            payload: data,
         });

    } catch (error) {
        dispatch({
            type: OTP_SEND_FAIL, 
            payload: error.response.data.message,
        });
    };
};


// Verify Otp

export const loginOtp = (email, otp) => async(dispatch) =>{
    try {
        dispatch({ type: OTP_LOGIN_REQUEST });

        const config = { headers: { "Content-Type": "application/json" } };

        // const { data } = await axios.post(`http://localhost:5000/api/v1/user/otplogin`, { email, otp, withCredentials: true }, config);
        const { data } = await axios.post(`/api/v1/user/otplogin`, { email, otp }, config);

        dispatch({
            type: OTP_LOGIN_SUCCESS,
            payload: data.user
        });

    }catch{
        dispatch({
            type: OTP_LOGIN_FAIL,
            payload: "Error",
        })
    }
}

// Clearing Errors

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};