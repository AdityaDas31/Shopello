import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { allUsersReducer, userReducer } from './reducers/userReducers';
import { newProductReducer, productDetailsReducer, productReducer, productReducers } from './reducers/productReducers';
import { wishlistReducer } from './reducers/wishlistReducer';


const reducer = combineReducers({
    user: userReducer,
    newProduct: newProductReducer,
    products: productReducers,
    product: productReducer,
    productDetails: productDetailsReducer,
    wishlist: wishlistReducer,
    users: allUsersReducer,
});

let initialState = {
    wishlist: {
        wishlistItems: localStorage.getItem('wishlistItems')
            ? JSON.parse(localStorage.getItem('wishlistItems'))
            : [],
    },
};

const middlewarwe = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlewarwe)));

export default store;