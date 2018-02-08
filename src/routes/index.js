import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './Home';
//import CoinInfo from './snapshot.js';


export default () => {
  (<BrowserRouter>
    <Switch>
      <Route exact path="/home" component={Home} />
    </Switch>
  </BrowserRouter>
  )
};
