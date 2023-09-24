import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { profileReducer, userReducer } from './reducers/userReducers';
// import {userReducer} from './reducers/userReducers';




const reducer = combineReducers({
    user: userReducer,
    profile: profileReducer,
});

let initialState={}

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;