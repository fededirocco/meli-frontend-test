import React, { Component } from 'react';
import {render} from 'react-dom';

import HelloWord from './components/app.jsx';

render(
  <HelloWord/>,
  document.getElementById('app')
);
