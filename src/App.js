import React from 'react';
import './App.css';
import FilmCard from './FilmCard'
import FilmCardContainer from './FilmCardContainer'

class App extends React.Component {

  state = {
    filmList: []
  }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=5b076c9b61e53ea3c493e7d25440c109&language=en-US&page=1")
    .then(response => response.json())
    .then(data => {
      data.results.forEach(film => {
        fetch(`https://api.themoviedb.org/3/movie/${film.id}?api_key=5b076c9b61e53ea3c493e7d25440c109&language=en-US`)
        .then(response => response.json())
        .then(data => this.setState(prevState => ({filmList: [...prevState.filmList, data]})))
      })
    })
  }

  render(){
    const films = this.state.filmList.map(film => {
      return (
        <FilmCard
          title={film.title}
          id={film.id}
          overview={film.overview}
          genres={film.genres}
          posterUrl={`https://image.tmdb.org/t/p/w154${film.poster_path}`}
        />
      )
    });

    return (
      <div>
        <FilmCardContainer films={films}/>
      </div>
    );
  }
}

export default App;
