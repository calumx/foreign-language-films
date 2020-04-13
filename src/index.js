import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css'
import Tmdb from './Tmdb';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
  <Tmdb />
  </BrowserRouter>
  , document.getElementById('root'));

  serviceWorker.unregister();