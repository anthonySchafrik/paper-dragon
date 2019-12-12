import React from 'react';
import { Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import history from './history';

import { store, persistor } from './reducers';

export default props => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router history={history}>{props.children}</Router>
      </PersistGate>
    </Provider>
  );
};
