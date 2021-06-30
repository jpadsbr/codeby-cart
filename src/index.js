import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';

import Start from './pages/Start';
import Cart from './pages/Cart';
import Sucess from './pages/Sucess';

import './styles/Global.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route exact path="/">
        <Redirect to="/start" />
      </Route>
      <Route exact path="/start" component={Start} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/sucess" component={Sucess} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
