import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Tmdb from './Tmdb';

ReactDOM.render(
  <BrowserRouter>
    <Tmdb />
  </BrowserRouter>,
  document.getElementById('root')
);
