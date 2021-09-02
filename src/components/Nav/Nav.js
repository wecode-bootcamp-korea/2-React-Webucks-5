import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Nav.scss';

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <header className="section">
          <div className="menuGroup right">
            <Link to="/list">
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
          {/* <i className="fas fa-bars" id="toggle-bar"></i> */}
          <span id="toggleBar">HELLO</span>
        </header>
      </div>
    );
  }
}

export default Nav;
