import React, { Component } from 'react';
import {render} from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css'

import App from './app.jsx';

render(
  <BrowserRouter>
      <Route component={ App } />
  </BrowserRouter>,
    document.getElementById('app')
);
