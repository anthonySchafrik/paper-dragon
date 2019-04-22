import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import thunk from 'redux-thunk';

import character from './characterReducer';
import loginInfo from './loginReducer';
import signUp from './signUpReducer';

const rootReducer = combineReducers({ character, loginInfo, signUp });

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2
  // blacklist: ['loginInfo']
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
