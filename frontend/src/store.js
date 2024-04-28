import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { allUsersReducer, profileReducer, userDetailsReducer, userReducer } from './reducers/userReducers';
import { newProductReducer, productDetailsReducer, productReducer, productReducers } from './reducers/productReducers';
import { wishlistReducer } from './reducers/wishlistReducer';
import { cartReducer } from './reducers/cartReducers';
import { newOrderReducer } from './reducers/orderReducer';


const reducer = combineReducers({
    user: userReducer,
    newProduct: newProductReducer,
    products: productReducers,
    product: productReducer,
    productDetails: productDetailsReducer,
    wishlist: wishlistReducer,
    users: allUsersReducer,
    cart: cartReducer,
    profile: profileReducer,
    userDetails: userDetailsReducer,
    newOrder: newOrderReducer,
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