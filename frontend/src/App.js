import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Dashboard, SignIn, Playlists, Songs, Account } from './pages/';
import './style.css';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/dashboard" component={Dashboard}></Route>
      <Route path="/sign-in" component={SignIn}></Route>
      <Route path="/:username" component={Account}></Route>
      <Route path="/:username/playlists" component={Playlists}></Route>
      <Route path="/:username/songs" component={Songs}></Route>
    </Switch>
  );
};

export default App;
