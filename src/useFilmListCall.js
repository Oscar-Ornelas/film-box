import {useState, useEffect} from 'react';

function useDataCall(category, page = "&page=1") {
  const API_KEY = process.env.REACT_APP_MOVIEDB_API_KEY;
  const [filmList, setFilmList] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}&language=en-US${page}`)
    .then(response => response.json())
    .then(data => {
      data.results.forEach(film => {
        fetch(`https://api.themoviedb.org/3/movie/${film.id}?api_key=${API_KEY}&language=en-US`)
        .then(response => response.json())
        .then(data => setFilmList(prevFilmList => [...prevFilmList, data]))
      })
    })
  }, []);

  return filmList;

}

export default useDataCall;
