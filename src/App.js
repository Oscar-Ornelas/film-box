import React, {useState, useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import FilmCard from './FilmCard';
import FilmCardContainer from './FilmCardContainer';
import FilmDetail from './FilmDetail';

function App() {
  const [filmList, setFilmList] = useState([])

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=5b076c9b61e53ea3c493e7d25440c109&language=en-US&page=1")
    .then(response => response.json())
    .then(data => {
      data.results.forEach(film => {
        fetch(`https://api.themoviedb.org/3/movie/${film.id}?api_key=5b076c9b61e53ea3c493e7d25440c109&language=en-US`)
        .then(response => response.json())
        .then(data => setFilmList(prevFilmList => [...prevFilmList, data]))
      })
    })
  }, []);

  return (
    <>
      <Switch>
        <Route exact path="/">
          <FilmCardContainer filmList={filmList}/>
        </Route>
        <Route path="/detail/movie/:filmID">
          <FilmDetail/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
