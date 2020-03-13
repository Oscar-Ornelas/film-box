import React, {useEffect, useState} from 'react';
import {SemipolarLoading} from 'react-loadingg';
import useSearch from './useSearch';

function Search() {
  const [isLoading, setIsLoading] = useState(true);
  const {
    searchFilms,
    increment,
    decrement,
    changeRoute,
    search,
    page
  } = useSearch();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }, [])


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
