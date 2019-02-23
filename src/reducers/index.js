import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import characterInfo from './characterReducer';
import loginInfo from './loginReducer';
import signUp from './signUpReducer';

const reducers = combineReducers({ characterInfo, loginInfo, signUp });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
// const store = createStore(reducers, applyMiddleware(thunk));

export default store;
