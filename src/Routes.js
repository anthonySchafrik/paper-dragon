import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AccountSetting from './components/AccountSetting';
import Character from './containers/character/Character';
import CharacterPage from './containers/character/CharacterPage';
import CreateCharacterPage from './containers/character/CreateCharacterPage';
import HomePage from './components/HomePage';
import SignUp from './components/SignUp';

const Routes = () => {
  return (
    <Switch>
      <Route path="/accountSetting" component={AccountSetting} />
      <Route path="/character" component={Character} />
      <Route path="/CreateCharacter" component={CreateCharacterPage} />
      <Route path="/characterPage" component={CharacterPage} />
      <Route path="/signUp" component={SignUp} />
      <Route path="/" component={HomePage} />
    </Switch>
  );
};

export default Routes;
