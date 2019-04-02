import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import MinMax from '../pages/MinMax';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/min-max" component={MinMax} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
