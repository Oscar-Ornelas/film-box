import {useState, useEffect} from 'react';

function useDataCall(category) {
  const [filmList, setFilmList] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=5b076c9b61e53ea3c493e7d25440c109&language=en-US&page=1`)
    .then(response => response.json())
    .then(data => {
      data.results.forEach(film => {
        fetch(`https://api.themoviedb.org/3/movie/${film.id}?api_key=5b076c9b61e53ea3c493e7d25440c109&language=en-US`)
        .then(response => response.json())
        .then(data => setFilmList(prevFilmList => [...prevFilmList, data]))
      })
    })
  }, []);

  return filmList;

}

export default useDataCall;
