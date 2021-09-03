import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Screen from '../components/Screen';

const Routes = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Screen}/>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;