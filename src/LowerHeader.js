import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function LowerHeader(props) {
  return (
    <div className="header-lower">
      <div className={`header-content-lower ${props.navSlide ? "navigation-open-lower" : "navigation-close-lower"}`}>
        <Link to="/discover" className="link"><a className="discover-link"><i className="fas fa-compass"></i></a></Link>
      </div>
    </div>
  )
}

export default LowerHeader;
