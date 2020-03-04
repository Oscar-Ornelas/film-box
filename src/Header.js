import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

function Header() {
  const API_KEY = process.env.REACT_APP_MOVIEDB_API_KEY;
  const [search, setSearch] = useState("");
  const [navSlide, setNavSlide] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
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

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }, [])

  return (
    <header style={{zIndex: navSlide ? `101` : `99`}} className={`header ${isLoading ? "hidden" : "visible"}`}>
      <div className="nav-toggler-container">
        <button onClick={toggleNavSlide} className="nav-toggler"><i class="fas fa-bars"></i></button>
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
