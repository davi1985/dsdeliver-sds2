import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Orders from './Orders';

function Routers() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/orders">
          <Orders />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routers;
