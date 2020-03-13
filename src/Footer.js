import React from 'react';
import {Link} from 'react-router-dom';
import apiLogo from './imgs/apiLogo.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-nav">
          <h1 className="logo footer-logo">Filmbox</h1>
          <div className="footer-nav-content">
            <ul className="footer-nav-list">
              <li className="footer-nav-item" onClick={() => window.scrollTo(0, 0)}>Home</li>
              <Link className="link" to="/discover"><li className="footer-nav-item">Discover</li></Link>
            </ul>
          </div>
        </div>

        <div className="footer-info">
          <p className="footer-info-item">Portfolio: <a className="footer-info-link"target="_blank" rel="noopener noreferrer" href="https://oscar-ornelas.github.io/portfolio-app">oscar-ornelas.github.io/portfolio-app</a></p>
          <p className="footer-info-item">Phone: <span>512-831-8142</span></p>
        </div>
      </div>

      <div className="api-info">
        <img className="api-logo" src={apiLogo}/>

        <div className="api-contact">
          <ul className="api-contact-list">
            <li className="api-contact-item"><a className="api-contact-link" href="https://www.facebook.com/themoviedb"><i className="fab fa-facebook-square"></i></a></li>
            <li className="api-contact-item"><a className="api-contact-link" href="https://twitter.com/themoviedb"><i className="fab fa-twitter"></i></a></li>
            <li className="api-contact-item"><a className="api-contact-link" href="https://www.themoviedb.org/documentation/api"><i className="fas fa-code"></i></a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
