import React, {useState, useEffect, useContext} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import {BackgroundContext} from "./backgroundContext";


function PersonDetail(props) {
  const API_KEY = process.env.REACT_APP_MOVIEDB_API_KEY;
  const [person, setPerson] = useState({});
  const [filmList, setFilmList] = useState([]);
  const {personID} = useParams();
  const history = useHistory();
  const {background, setBackground} = useContext(BackgroundContext);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/person/${personID}?api_key=${API_KEY}&language=en-US`)
    .then(response => response.json())
    .then(data => setPerson(data));
  }, []);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/person/${personID}/movie_credits?api_key=${API_KEY}&language=en-US`)
    .then(response => response.json())
    .then(data => setFilmList(data.cast))
  }, []);

  function goBackwards() {
    history.goBack();
    setTimeout(() => {
      window.location.reload();
    }, 10);
  }

  const films = filmList.map(film => (
    <div className="popular-roles">
      <div className="popular-role-info">
        <h3 className="popular-role-title">{film.title}</h3>
        <p className="popular-role-character">{film.character}</p>
        <div>
          <img className="popular-role-poster" src={`https://image.tmdb.org/t/p/w185${film.poster_path}`}/>
        </div>
      </div>
      <p className="popular-role-overview">{film.overview.length > 300 ? `${film.overview.slice(0, 300)}...` : film.overview}</p>
    </div>
  ))

  return (
    <>
      <div className="main-content">
        <div className="film-detail-img"
        style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.40), rgba(0, 0, 0, 0.93)), url(${background})`}}>
          <p className="film-detail-back" onClick={goBackwards}><i className="fas fa-chevron-left"></i></p>
          <div className="film-detail-card">
            <div className="film-detail-card-info">
              <h2 className="film-detail-title">{person.name}</h2>
              <p className="film-detail-genres">{person.gender === 2 ? "Male" : "Female"} | {person.known_for_department}</p>
              <p className="film-detail-status">{person.birthday}</p>
            </div>
            <img className="film-detail-poster" src={`https://image.tmdb.org/t/p/w154${person.profile_path}`}/>
          </div>
        </div>
      </div>

      <div className="main-content container">
        <section className="overview">
          <ScrollAnimation
          animateIn="slideInLeft"
          animateOnce={true}
          offSet="300"
          duration={0.5}
          >
            <h2 className="detail-header">Overview</h2>
          </ScrollAnimation>
          <p>{person.biography}</p>
        </section>


        <section>
          <ScrollAnimation
          animateIn="slideInLeft"
          animateOnce={true}
          animatePreScroll={false}
          offSet="300"
          >
            <h2 className="detail-header">Popular Roles</h2>
          </ScrollAnimation>

          {films}

        </section>

      </div>
    </>



  )
}

export default PersonDetail;
