import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import FilmDetail from './FilmDetail';

function FilmCard(props){
  const history = useHistory();

  function changeRoute() {
    history.replace(`/detail/movie/${props.id}`);
    window.location.reload();
  }

  return (
      <div onClick={changeRoute} className="film-card">
        <p className="film-card-title">{props.title}</p>
        <img className="film-card-poster" src={props.posterUrl}/>
        <p className="film-card-genre">{props.genres[0].name} {props.genres.length > 1 ? ` / ${props.genres[1].name}` : ""}</p>
        <p className="film-card-rating"><i class="fas fa-star"></i> {props.rating}</p>
      </div>
  )
}

export default FilmCard;
