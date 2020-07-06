import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import './style.css';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/dashboard" component={Dashboard}></Route>
      {/* <Route path="/playlists" component={Playlists}></Route>
      <Route path="/songs" component={Songs}></Route>
      <Route path="/search" component={Search}></Route>
      <Route path="/account" component={Account}></Route> */}
    </Switch>
  );
};

export default App;
