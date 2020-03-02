import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function Header() {
  const [searchValue, setSearchValue] = useState("");
  const [navSlide, setNavSlide] = useState(false);

  function handleChange(e) {
    const {value} = e.target;
    setSearchValue(value);
  }

  function toggleNavSlide() {
    setNavSlide(prevNavSlide => !prevNavSlide);
  }

  return (
    <header className="header">
      <div className="nav-toggler-container">
        <button onClick={toggleNavSlide} className="nav-toggler">&#9776;</button>
      </div>
      <div className={`header-content ${navSlide ? "navigation-open" : "navigation-close"}`}>
        <Link to="/" className="link">
          <h1 className="logo">Filmbox</h1>
        </Link>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <form className="form">
                <input name="searchValue" value={searchValue} onChange={handleChange} className="search" type="text"></input>
                <button className="search-btn"><i class="fas fa-search"></i></button>
              </form>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;
