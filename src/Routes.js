import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AccountSetting from './components/AccountSetting';
import Character from './components/character/Character';
import CharacterPage from './components/character/CharacterPage';
import CreateCharacterPage from './components/character/CreateCharacterPage';
import CombatContainer from './components/Combat/CombatContainer';
import HomePage from './components/HomePage';
import SignUp from './components/SignUp';

const Routes = () => {
  return (
    <Switch>
      <Route path="/accountSetting" component={AccountSetting} />
      <Route path="/character" component={Character} />
      <Route path="/CreateCharacter" component={CreateCharacterPage} />
      <Route path="/characterPage" component={CharacterPage} />
      <Route path="/play" component={CombatContainer} />
      <Route path="/signUp" component={SignUp} />
      <Route path="/" component={HomePage} />
    </Switch>
  );
};

export default Routes;
