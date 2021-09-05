import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './Nav.scss';

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <header className="section">
          <div className="menuGroup right">
            <Link to="/login-sungjaelee">
              <img src="/images/sungjaelee/WeBucks-logo.svg" alt="logo" />
            </Link>
          </div>
          <div className="menuGroup left toggle">
            <ul>
              <li>
                <Link to="#">COFFEE</Link>
              </li>
              <li>
                <Link to="#">MENU</Link>
              </li>
              <li>
                <Link to="#">STORE</Link>
              </li>
              <li>
                <Link to="#">WHAT'S NEW</Link>
              </li>
              <li>
                <Link to="/login">SIGN-IN</Link>
              </li>
            </ul>
          </div>
          <FontAwesomeIcon icon={faBars} id="toggleBar" />
        </header>
      </div>
    );
  }
}

export default Nav;
