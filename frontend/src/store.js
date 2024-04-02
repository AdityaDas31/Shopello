import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userReducer } from './reducers/userReducers';
import { newProductReducer, productReducer, productReducers } from './reducers/productReducers';


const reducer = combineReducers({
    user: userReducer,
    newProduct: newProductReducer,
    products: productReducers,
    product: productReducer,
});

let initialState = {};

const middlewarwe = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlewarwe)));

export default store;