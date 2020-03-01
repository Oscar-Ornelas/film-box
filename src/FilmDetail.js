import React, {useState, useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {SemipolarLoading} from 'react-loadingg';
import FilmCard from './FilmCard';

function FilmDetail() {
  const [film, setFilm] = useState({});
  const {filmID} = useParams();
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }, [])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${filmID}?api_key=5b076c9b61e53ea3c493e7d25440c109&language=en-US`)
    .then(response => response.json())
    .then(data => setFilm(data))
  }, [])

  return (
    <main>
      <div className={`loading-icon ${isLoading ? "visible" : "hidden"}`}>
        <SemipolarLoading/>
      </div>

      <div className={`film-detail ${isLoading ? "hidden" : "visible"}`}>
        <div className="film-detail-img"
        style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.20), rgba(0, 0, 0, 0.73)), url(https://image.tmdb.org/t/p/w1280${film.backdrop_path})`}}>
          <p className="film-detail-back" onClick={() => history.goBack()}><i className="fas fa-chevron-left"></i></p>
          <div className="film-detail-card">
            <div className="film-detail-card-info">
              <h2 className="film-detail-title">{film.title}</h2>
              <p className="film-detail-rating">{film.vote_average} Rating</p>
              <p>{film.status}</p>
            </div>
            <img className="film-detail-poster" src={`https://image.tmdb.org/t/p/w154${film.poster_path}`}/>
          </div>
        </div>

        <div className="main-content container">
          <section className="overview">
            <h2>Overview</h2>
            <p>{film.overview}</p>
          </section>
        </div>


      </div>
    </main>

  )

}

export default FilmDetail;
