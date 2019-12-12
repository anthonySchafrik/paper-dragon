// import React from 'react';
// import ReactDOM from 'react-dom';

// import 'babel-polyfill';

// import App from './App';
// import Root from './Root';

// ReactDOM.render(
//   <Root>
//     <App />
//   </Root>,

//   document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import { Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import App from './App';
import history from './history';

import { store, persistor } from './reducers';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router history={history}>
        <App />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
