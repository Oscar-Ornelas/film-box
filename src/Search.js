import React, {useEffect, useState} from 'react';
import {useParams, useHistory} from 'react-router-dom';

function Search() {
  const API_KEY = process.env.REACT_APP_MOVIEDB_API_KEY;
  const [searchFilms, setSearchFilms] = useState([]);
  const [filmList, setFilmList] = useState([]);
  const {search} = useParams();
  const history = useHistory();

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${search}&page=1&include_adult=false`)
    .then(response => response.json())
    .then(data => {
      data.results.forEach(film => {
        fetch(`https://api.themoviedb.org/3/movie/${film.id}?api_key=${API_KEY}&language=en-US`)
        .then(response => response.json())
        .then(data => {
          if(film.poster_path !== null) {
            setSearchFilms(prevSearchFilms => [...prevSearchFilms, film]);
          }
        })
      })
    });
  }, []);

  const films = searchFilms.map(film => (
    <div onClick={() => changeRoute(film.id)} className="search-item">
      <div className="search-item-content">
        <p className="search-item-title">{film.title}</p>
      </div>
      <img src={`https://image.tmdb.org/t/p/w185${film.poster_path}`} className="search-item-poster"></img>
    </div>
  ))

  function changeRoute(id) {
    history.replace(`/detail/movie/${id}`);
    window.location.reload();
  }

  return (
    <main className="container">
      <h1 className="search-header">Search results for {search}</h1>
      <div className="search-grid">
        {films}
      </div>
    </main>
  )
}

export default Search;
