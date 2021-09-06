/*eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

class TopNav extends Component {
  render() {
    return (
      <div className="TopNav">
        <header className="navInner">
          <div className="menuGroup right">
            <Link to="/list-wookchanglee">
              <img src="/images/wookchanglee/WeBucks-logo.svg" alt="logo" />
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
                <Link to="/login-wookchanglee">SIGN-IN</Link>
              </li>
            </ul>
          </div>
          <i className="fas fa-bars" id="toggleBar"></i>
        </header>
      </div>
    );
  }
}

export default TopNav;
