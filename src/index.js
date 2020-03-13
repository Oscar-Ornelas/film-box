import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {HashRouter as Router} from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import {BackgroundContextProvider} from './backgroundContext';


ReactDOM.render(
  <Router basename="/film-box">
    <ScrollToTop/>
    <BackgroundContextProvider>
      <App />
    </BackgroundContextProvider>
  </Router>, document.getElementById('root'));
