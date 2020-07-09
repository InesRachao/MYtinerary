import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../store/reducers/rootReducer';
import logger from "redux-logger";
import { loadUser } from './actions/loginActions';

const initialState = {};


const middleware = applyMiddleware(thunk, logger);

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer, 
    initialState, 
    reduxDevTools(middleware)
);
if (localStorage.token) {
    store.dispatch(loadUser())
}


export default store;