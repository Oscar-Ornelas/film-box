import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import ScrollToTop from './ScrollToTop';


ReactDOM.render(
  <Router basename="/film-box">
    <ScrollToTop/>
    <App />
  </Router>, document.getElementById('root'));
