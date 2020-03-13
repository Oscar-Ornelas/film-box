import {useState, useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';

function useSearch() {
  const API_KEY = process.env.REACT_APP_MOVIEDB_API_KEY;
  const [searchFilms, setSearchFilms] = useState([]);
  const [page, setPage] = useState(1);
  const {search} = useParams();
  const history = useHistory();

  useEffect(() => {
    dataCall();
  }, [page]);

  function dataCall() {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${search}&page=${page}&include_adult=false`)
    .then(response => response.json())
    .then(data => {
      setSearchFilms([]);
      data.results.forEach(film => {
        fetch(`https://api.themoviedb.org/3/movie/${film.id}?api_key=${API_KEY}&language=en-US`)
        .then(response => response.json())
        .then(data => {
          if(film.poster_path !== null) {
            setSearchFilms(prevSearchFilms => [...prevSearchFilms, film]);
          }
        })
      })
    });
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

  return {searchFilms, increment, decrement, changeRoute, search, page};
}

export default useSearch;
