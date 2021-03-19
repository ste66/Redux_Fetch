// made a store shelf for BookStore
import { createStore, applyMiddleware, compose } from "redux";
// import rootReducer from './reducers';
import rootReducer from "./reducers"
import thunk from 'redux-thunk';
const initialState = {}

//  a middleware to solve error
const middleware = [thunk]
/**
 * parameter: reducer, initial value
 */
const store = createStore( // accepts 3 parameters
    rootReducer, // reducer
    initialState, // preloaded state
    compose (  applyMiddleware(...middleware),  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
   // enhancer

);

export default store;