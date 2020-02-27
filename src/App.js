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

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/configuration?api_key=5b076c9b61e53ea3c493e7d25440c109")
    .then(response => response.json())
    .then(data => console.log(data));
  }, [])


  const films = filmList.map(film => {
    return (
      <FilmCard
        key={film.id}
        title={film.title}
        id={film.id}
        overview={film.overview}
        genres={film.genres}
        posterUrl={`https://image.tmdb.org/t/p/w154${film.poster_path}`}
      />
    )
  });

  return (
    <>
      <Switch>
        <Route exact path="/">
          <FilmCardContainer films={films}/>
        </Route>
        <Route path="/detail/movie/:filmID">
          <FilmDetail/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
