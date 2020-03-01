import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './Home';
import FilmDetail from './FilmDetail';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/film-box">
          <Home/>
        </Route>
        <Route path="/film-box/detail/movie/:filmID">
          <FilmDetail/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
