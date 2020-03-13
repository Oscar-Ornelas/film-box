import {React, useState, useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';

function useSearch() {
  const [searchFilms, setSearchFilms] = useState([]);
  const [page, setPage] = useState(1);
  const history = useHistory();

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

  return {searchFilms, setSearchFilms, increment, decrement, changeRoute, page};
}

export default useSearch;
