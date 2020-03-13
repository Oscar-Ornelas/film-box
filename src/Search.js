import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {SemipolarLoading} from 'react-loadingg';
import useSearch from './useSearch';

function Search() {
  const API_KEY = process.env.REACT_APP_MOVIEDB_API_KEY;
  const [isLoading, setIsLoading] = useState(true);
  const {search} = useParams();
  const {
    searchFilms,
    setSearchFilms,
    increment,
    decrement,
    changeRoute,
    page
  } = useSearch();

  useEffect(() => {
    dataCall();
  }, [page]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }, [])

  function dataCall() {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${search}&page=${page}&include_adult=false`)
    .then(response => response.json())
    .then(data => {
      setSearchFilms([]);
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
  }

  const films = searchFilms.map(film => (
      <div key={film.id} onClick={() => changeRoute(film.id)} className="search-item">
        <div className="search-item-content">
          <p className="search-item-title">{film.title}</p>
        </div>
        <img src={`https://image.tmdb.org/t/p/w300${film.poster_path}`} className="search-item-poster"></img>
      </div>
    )
  )

  return (
    <>
      <div className={`loading-icon ${isLoading ? "visible" : "hidden"}`}>
        <SemipolarLoading/>
      </div>

      <main className={`container ${isLoading ? "hidden" : "visible"}`}>
        <h1 className="search-header">Search results for {search}</h1>
        <div className="search-grid">
          {films}
        </div>
        <div className="switch-page-btns">
          {page !== 1 ? <button onClick={decrement} className="switch-page-btn prev-page-btn">Previous Page</button> : ""}
          <button onClick={increment} className="switch-page-btn next-page-btn">Next Page</button>
        </div>
      </main>
    </>
  )
}

export default Search;
