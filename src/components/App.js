import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CharacterPage from './CharacterPage';
import HomePage from './HomePage';
import SignUp from './SignUp';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/characterPage" component={CharacterPage} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
};

export default App;
