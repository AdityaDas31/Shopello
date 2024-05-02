import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { allUsersReducer, forgotPasswordReducer, profileReducer, userDetailsReducer, userReducer } from './reducers/userReducers';
import { newProductReducer, newReviewReducer, productDetailsReducer, productReducer, productReducers, productReviewsReducer, reviewReducer, sellerProductReducers } from './reducers/productReducers';
import { wishlistReducer } from './reducers/wishlistReducer';
import { cartReducer } from './reducers/cartReducers';
import { allOrdersReducer, myOrdersReducer, newOrderReducer, orderDetailsReducer, orderReducer, sellerOrdersReducer } from './reducers/orderReducer';
import { saveForLaterReducer } from './reducers/saveForLaterReducer';
import { applicationDetailsReducer, applicationReducer, applicationStatusReducer, applySellerReducer, getUserReducer } from './reducers/sellerReducers';



const reducer = combineReducers({
    user: userReducer,
    profile: profileReducer,
    forgotPassword: forgotPasswordReducer,
    products: productReducers,
    productDetails: productDetailsReducer,
    newReview: newReviewReducer,
    cart: cartReducer,
    saveForLater: saveForLaterReducer,
    newOrder: newOrderReducer,
    myOrders: myOrdersReducer,
    orderDetails: orderDetailsReducer,
    allOrders: allOrdersReducer,
    order: orderReducer,
    newProduct: newProductReducer,
    product: productReducer,
    users: allUsersReducer,
    userDetails: userDetailsReducer,
    reviews: productReviewsReducer,
    review: reviewReducer,
    wishlist: wishlistReducer,
    newSeller: applySellerReducer,
    applications: applicationReducer,
    applicationDelails: applicationDetailsReducer,
    applicationStatus: applicationStatusReducer,
    sellerProducts: sellerProductReducers,
    sellerOrders: sellerOrdersReducer,
    getUser: getUserReducer,
});

let initialState = {
    wishlist: {
        wishlistItems: localStorage.getItem('wishlistItems')
            ? JSON.parse(localStorage.getItem('wishlistItems'))
            : [],
    },
    cart: {
        cartItems: localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems'))
            : [],
        shippingInfo: localStorage.getItem("shippingInfo")
            ? JSON.parse(localStorage.getItem("shippingInfo"))
            : {},
    },
};

const middlewarwe = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlewarwe)));

export default store;