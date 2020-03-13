import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {SemipolarLoading} from 'react-loadingg';

function Discover() {
  const API_KEY = process.env.REACT_APP_MOVIEDB_API_KEY;
  const [isLoading, setIsLoading] = useState(true);
  const [discoverFilms, setDiscoverFilms] = useState([]);
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({year: "", voteAverage: "", sortBy: "popularity.desc", genres: ""});
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }, [])

  useEffect(() => {
    dataCall();
  }, [page])

  function dataCall() {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=${formData.sortBy}&include_adult=false&include_video=false&page=${page}&primary_release_year=${formData.year}&vote_average.gte=${formData.voteAverage}`)
    .then(response => response.json())
    .then(data => {
      setDiscoverFilms([])
      data.results.forEach(film => {
        fetch(`https://api.themoviedb.org/3/movie/${film.id}?api_key=${API_KEY}&language=en-US`)
        .then(response => response.json())
        .then(data => {
          if(film.poster_path !== null) {
            setDiscoverFilms(prevDiscoverFilms => [...prevDiscoverFilms, film]);
          }
        })
      });
    });
  }

  function handleChange(e) {
    const {name, value} = e.target;
    setFormData(prevFormData => ({...prevFormData, [name]: value}))
  }

  function handleSubmit(e) {
    e.preventDefault();
    dataCall();
  }

  function changeRoute(id) {
    history.push(`/detail/movie/${id}`);
    window.location.reload();
  }

  function increment() {
    setPage(prevPage => prevPage + 1);
  }

  function decrement() {
    setPage(prevPage => prevPage - 1);
  }

  const films = discoverFilms.map(film => (
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

    <div className={`discover container ${isLoading ? "hidden" : "visible"}`}>
      <div className="discover-form-container">
      <h1 className="search-header">Discover</h1>
        <form className="discover-form">
          <div className="discover-inputs">
            <input
              name="year"
              type="number"
              placeholder="Year"
              value={formData.year}
              onChange={handleChange}
              min="1900"
              max="2050"
              className="discover-input"
            />
            <input
              name="voteAverage"
              type="number"
              placeholder="Vote Average"
              value={formData.voteAverage}
              onChange={handleChange}
              min="1"
              max="10"
              className="discover-input"
            />
            <select
              value={formData.sortBy}
              onChange={handleChange}
              name="sortBy"
              className="discover-input"
            >
              <option value="popularity.asc">Popularity Ascending</option>
              <option value="popularity.desc">Popularity Descending</option>
              <option value="release_date.asc">Release Date Ascending</option>
              <option value="release_data.desc">Release Date Descending</option>
              <option value="revenue.asc">Revenue Ascending</option>
              <option value="revenue.desc">Revenue Descending</option>
              <option value="vote_average.asc">Vote Average Ascending</option>
              <option value="vote_average.desc">Vote Average Descending</option>
           </select>
          </div>

          <button className="discover-btn" onClick={handleSubmit}>Search</button>
        </form>
      </div>

      <main className="container">
        <div className="search-grid">
          {films}
        </div>

        <div className="switch-page-btns">
          {page !== 1 ? <button onClick={decrement} className="switch-page-btn prev-page-btn">Previous Page</button> : ""}
          <button onClick={increment} className="switch-page-btn next-page-btn">Next Page</button>
        </div>
      </main>
    </div>

    </>
  )
}

export default Discover;
