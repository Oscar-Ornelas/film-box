import React, {useState} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './Home';
import FilmDetail from './FilmDetail';
import PersonDetail from './PersonDetail';
import Header from './Header';
import LowerHeader from './LowerHeader';
import Search from './Search';
import Discover from './Discover';

function App() {
  const [navSlide, setNavSlide] = useState(false);

  return (
    <>
      <Header navSlide={navSlide} setNavSlide={setNavSlide}/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/detail/movie/:filmID">
            <FilmDetail/>
          </Route>
          <Route path="/detail/person/:personID">
            <PersonDetail/>
          </Route>
          <Route path="/search/:search">
            <Search />
          </Route>
          <Route path="/discover">
            <Discover />
          </Route>
        </Switch>
      <LowerHeader navSlide={navSlide}/>
    </>
  );
}

export default App;
