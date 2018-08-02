import React, { Component } from 'react';
import {render} from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css'

import SearchBar from './components/searchBar.jsx';

render(
  <SearchBar />,
  document.getElementById('app')
);
