import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Carrinho from '../pages/Carrinho';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/carrinho" component={Carrinho} />
  </Switch>
);

export default Routes;
