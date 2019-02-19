import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SignUp from './SignUp';
import HomePage from './HomePage';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" component={SignUp} />
        {/* <Route path="/" component={HomePage} /> */}
      </Switch>
    </div>
  );
};

export default App;
