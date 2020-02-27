import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

function FilmDetail() {
  const [filmData, setFilmData] = useState({});
  const {filmID} = useParams();

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${filmID}?api_key=5b076c9b61e53ea3c493e7d25440c109&language=en-US`)
    .then(response => response.json())
    .then(data => setFilmData(data))
  }, [])

  return (
    <div className="film-detail">
      <h1>{filmData.title}</h1>
      <div className="film-detail-img"><img src={`https://image.tmdb.org/t/p/w1280${filmData.backdrop_path}`}/></div>
    </div>
  )

}

export default FilmDetail;
