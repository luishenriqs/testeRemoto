import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import BuyNow from '../pages/BuyNow';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/buynow" exact component={BuyNow} />
  </Switch>
);

export default Routes;
