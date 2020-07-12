import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import {
  Home,
  Dashboard,
  SignIn,
  SignUp,
  Playlists,
  Songs,
  Account,
  ResetPassword,
} from './pages/';
import UserProvider from './providers/UserProvider';

import './style.css';

const App = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/dashboard" component={Dashboard}></Route>
          <Route path="/sign-in" component={SignIn}></Route>
          <Route path="/sign-up" component={SignUp}></Route>
          <Route path="/reset-password" component={ResetPassword}></Route>
          <Route path="/:username" component={Account}></Route>
          <Route path="/:username/playlists" component={Playlists}></Route>
          <Route path="/:username/songs" component={Songs}></Route>
        </Switch>
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
