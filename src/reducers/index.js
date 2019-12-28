import { combineReducers } from 'redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import thunk from 'redux-thunk';

import character from './characterReducer';
import user from './UserReducer';

const persistConfig1 = {
  key: 'root1',
  storage,
  stateReconciler: autoMergeLevel2
};

const persistConfig2 = {
  key: 'root2',
  storage,
  stateReconciler: autoMergeLevel2
};

const persistedReducer1 = persistReducer(persistConfig1, user);
const persistedReducer2 = persistReducer(persistConfig2, character);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
// const store = createStore(reducers, applyMiddleware(thunk));

let store = createStore(
  combineReducers({
    character: persistedReducer2,
    user: persistedReducer1
  }),
  composeEnhancers(applyMiddleware(thunk))
);

let persistor = persistStore(store);

export { store, persistor };
