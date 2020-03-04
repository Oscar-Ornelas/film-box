import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';

function Header() {
  const API_KEY = process.env.REACT_APP_MOVIEDB_API_KEY;
  const [search, setSearch] = useState("");
  const [navSlide, setNavSlide] = useState(false);
  const history = useHistory();

  function handleChange(e) {
    const {value} = e.target;
    setSearch(value);
  }

  function toggleNavSlide() {
    setNavSlide(prevNavSlide => !prevNavSlide);
  }

  function changeRoute() {
    history.replace(`/search/${search}`);
    window.location.reload();
  }

  return (
    <header className="header">
      <div className="nav-toggler-container">
        <button onClick={toggleNavSlide} className="nav-toggler">&#9776;</button>
      </div>
      <div className={`header-content ${navSlide ? "navigation-open" : "navigation-close"}`}>
        <div className="logo-container">
          <Link to="/" className="link">
            <h1 className="logo">Filmbox</h1>
          </Link>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <form className="form">
                <input name="searchValue" placeholder="Search" value={search} onChange={handleChange} className="search-input" type="text"></input>
                <button onClick={changeRoute} className="search-btn"><i className="fas fa-search"></i></button>
              </form>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;
