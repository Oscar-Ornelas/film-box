import React from 'react';

function FilmCardContainer(props) {
  return (
    <div className="carousel-wrapper">
      <div class="carousel">
        {props.films}
      </div>
    </div>
    
  )
}

export default FilmCardContainer;
