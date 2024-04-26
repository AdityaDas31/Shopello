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
    ALL_USERS_REQUEST,
    ALL_USERS_SUCCESS,
    ALL_USERS_FAIL,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL,
    CLEAR_ERRORS,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
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

// Get All Users ---ADMIN
export const getAllUsers = () => async (dispatch) => {
    try {

        dispatch({ type: ALL_USERS_REQUEST });
        const { data } = await axios.get('/api/v1/user/admin/users');
        dispatch({
            type: ALL_USERS_SUCCESS,
            payload: data.users,
        });

    } catch (error) {
        dispatch({
            type: ALL_USERS_FAIL,
            payload: error.response.data.message,
        });
    }
};


// Delete User ---ADMIN
export const deleteUser = (id) => async (dispatch) => {
    try {

        dispatch({ type: DELETE_USER_REQUEST });
        const { data } = await axios.delete(`/api/v1/user/admin/user/${id}`);

        dispatch({
            type: DELETE_USER_SUCCESS,
            payload: data.success,
        });

    } catch (error) {
        dispatch({
            type: DELETE_USER_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Update User Details ---ADMIN
export const updateUser = (id, userData) => async (dispatch) => {
    try {

        dispatch({ type: UPDATE_USER_REQUEST });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        }

        const { data } = await axios.put(
            `/api/v1/user/admin/user/${id}`,
            userData,
            config
        );

        dispatch({
            type: UPDATE_USER_SUCCESS,
            payload: data.success,
        });

    } catch (error) {
        dispatch({
            type: UPDATE_USER_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Get User Details ---ADMIN
export const getUserDetails = (id) => async (dispatch) => {
    try {

        dispatch({ type: USER_DETAILS_REQUEST });
        const { data } = await axios.get(`/api/v1/user/admin/user/${id}`);

        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data.user,
        });

    } catch (error) {
        dispatch({
            type: USER_DETAILS_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Clearing Errors

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};