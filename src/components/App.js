import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AccountSetting } from './AccountSetting';
import Character from './Character';
import CharacterPage from './CharacterPage';
import CreateCharacter from './CreateCharacter';
import HomePage from './HomePage';
import SignUp from './SignUp';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/accountSetting" component={AccountSetting} />
        <Route path="/character" component={Character} />
        <Route path="/createCharacter" component={CreateCharacter} />
        <Route path="/characterPage" component={CharacterPage} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
};

export default App;
