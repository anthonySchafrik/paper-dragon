import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import characterInfo from './characterReducer';
import loginInfo from './loginReducer';
import signUp from './signUpReducer';

const rootReducer = combineReducers({ characterInfo, loginInfo, signUp });

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
// const store = createStore(reducers, applyMiddleware(thunk));

let store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);
let persistor = persistStore(store);

export { store, persistor };
