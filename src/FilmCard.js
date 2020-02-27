import React from 'react';

function FilmCard(props){
  return (
    <div className="film-card">
      <p className="film-card-title">{props.title}</p>
      <img className="film-card-poster" src={props.posterUrl}/>
      <p className="film-card-genre">{props.genres[0].name} {props.genres.length > 1 ? ` / ${props.genres[1].name}` : ""}</p>
    </div>
  )
}

export default FilmCard;
