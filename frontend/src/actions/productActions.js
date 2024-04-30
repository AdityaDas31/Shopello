import {
    NEW_PRODUCT_REQUEST,
    NEW_PRODUCT_SUCCESS,
    NEW_PRODUCT_FAIL,
    ADMIN_PRODUCT_SUCCESS,
    ADMIN_PRODUCT_REQUEST,
    ADMIN_PRODUCT_FAIL,
    ALL_PRODUCTS_FAIL,
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    PRODUCT_APPROVE_REQUEST,
    PRODUCT_APPROVE_SUCCESS,
    PRODUCT_APPROVE_FAIL,
    PRODUCT_AVAILABLE_REQUEST,
    PRODUCT_AVAILABLE_FAIL,
    PRODUCT_AVAILABLE_SUCCESS,
    SLIDER_PRODUCTS_REQUEST,
    SLIDER_PRODUCTS_SUCCESS,
    SLIDER_PRODUCTS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    CLEAR_ERRORS,
    NEW_REVIEW_REQUEST,
    NEW_REVIEW_SUCCESS,
    NEW_REVIEW_FAIL,
    ALL_REVIEWS_REQUEST,
    ALL_REVIEWS_SUCCESS,
    ALL_REVIEWS_FAIL,
    DELETE_REVIEW_REQUEST,
    DELETE_REVIEW_SUCCESS,
    DELETE_REVIEW_FAIL,
    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAIL,
} from '../constants/productConstants';
import axios from 'axios';



// Add New Product

export const createProduct = (productData) => async (dispatch) => {
    try {
        dispatch({ type: NEW_PRODUCT_REQUEST });

        const config = {
            headers: { "Content-Type": "multipart/form-data" },
        };

        // const { data } = await axios.post(`http://localhost:5000/api/v1/product/admin/product/new`, productData, config);
        const { data } = await axios.post(`/api/v1/product/admin/product/new`, productData, config);

        dispatch({
            type: NEW_PRODUCT_SUCCESS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: NEW_PRODUCT_FAIL,
            payload: error.response.data.message,
        });
    }
}

// Get All Product -- Admin

export const getAdminProduct = () => async (dispatch) => {
    try {
        dispatch({ type: ADMIN_PRODUCT_REQUEST });

        // const { data } = await axios.get('http://localhost:5000/api/v1/product/admin/products');
        const { data } = await axios.get('/api/v1/product/admin/products');

        dispatch({
            type: ADMIN_PRODUCT_SUCCESS,
            payload: data.products,
        });
    } catch (error) {
        dispatch({
            type: ADMIN_PRODUCT_FAIL,
            payload: error.response.data.message,
        });
    }
}

// Get All Product

export const getProducts = (keyword="", currentPage = 1, price=[0,200000],category, ratings = 0) => async (dispatch) => {
    try {
        dispatch({ type: ALL_PRODUCTS_REQUEST });

        // const { data } = await axios.get(`http://localhost:5000/api/v1/product/products`);
        // const { data } = await axios.get(`/api/v1/product/products`);
        let link = `/api/v1/product/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`;
        if(category){
            link = `/api/v1/product/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${ratings}`;
        } 

        const { data } = await axios.get(link);

        dispatch({
            type: ALL_PRODUCTS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: ALL_PRODUCTS_FAIL,
            payload: error.response.data.message,
        });
    }
}

// Approve Product

export const approveProduct = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_APPROVE_REQUEST });

        const { data } = await axios.put(`/api/v1/product/admin/approve/${id}`);

        dispatch({
            type: PRODUCT_APPROVE_SUCCESS,
            payload: data.success,
        });

    } catch (error) {
        dispatch({
            type: PRODUCT_APPROVE_FAIL,
            payload: error.response.data.message,
        })
    }
}

// Available Product

export const availableProduct = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_AVAILABLE_REQUEST });

        const { data } = await axios.put(`/api/v1/product/admin/available/${id}`);

        dispatch({
            type: PRODUCT_AVAILABLE_SUCCESS,
            payload: data.success,
        });

    } catch (error) {
        dispatch({
            type: PRODUCT_AVAILABLE_FAIL,
            payload: error.response.data.message,
        })
    }
}

// Get All Products ---PRODUCT SLIDER
export const getSliderProducts = () => async (dispatch) => {
    try {
        dispatch({ type: SLIDER_PRODUCTS_REQUEST });

        const { data } = await axios.get('/api/v1/product/products/all');

        dispatch({
            type: SLIDER_PRODUCTS_SUCCESS,
            payload: data.products,
        });
    } catch (error) {
        dispatch({
            type: SLIDER_PRODUCTS_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Get Product Details
export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST });

        const { data } = await axios.get(`/api/v1/product/product/${id}`);

        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data.product,
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response.data.message,
        });
    }
};

// New/Update Review
export const newReview = (reviewData) => async (dispatch) => {
    try {
        dispatch({ type: NEW_REVIEW_REQUEST });
        const config = { header: { "Content-Type": "application/json" } }
        const { data } = await axios.put("/api/v1/product/review", reviewData, config);

        dispatch({
            type: NEW_REVIEW_SUCCESS,
            payload: data.success,
        });
    } catch (error) {
        dispatch({
            type: NEW_REVIEW_FAIL,
            payload: error.response.data.message,
        });
    }
}

// Get Product Reviews ---ADMIN
export const getAllReviews = (id) => async (dispatch) => {
    try {
        dispatch({ type: ALL_REVIEWS_REQUEST });
        const { data } = await axios.get(`/api/v1/product/admin/reviews?id=${id}`);

        dispatch({
            type: ALL_REVIEWS_SUCCESS,
            payload: data.reviews,
        });
    } catch (error) {
        dispatch({
            type: ALL_REVIEWS_FAIL,
            payload: error.response.data.message,
        });
    }
}

// Delete Product Review ---ADMIN
export const deleteReview = (reviewId, productId) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_REVIEW_REQUEST });
        const { data } = await axios.delete(`/api/v1/product/admin/reviews?id=${reviewId}&productId=${productId}`);

        dispatch({
            type: DELETE_REVIEW_SUCCESS,
            payload: data.success,
        });
    } catch (error) {
        dispatch({
            type: DELETE_REVIEW_FAIL,
            payload: error.response.data.message,
        });
    }
}

// Update Product ---ADMIN
export const updateProduct = (id, productData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_PRODUCT_REQUEST });
        const config = { header: { "Content-Type": "application/json" } }
        const { data } = await axios.put(`/api/v1/product/admin/product/${id}`, productData, config);

        dispatch({
            type: UPDATE_PRODUCT_SUCCESS,
            payload: data.success,
        });
    } catch (error) {
        dispatch({
            type: UPDATE_PRODUCT_FAIL,
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