/*eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

class Nav extends Component {
  constructor() {
    super();
    this.state = { isMenuClicked: false };
  }
  render() {
    return (
      <div className="Nav">
        <header className="navInner">
          <div className="menuGroup right">
            <Link to="/list-wookchanglee">
              <img src="/images/wookchanglee/WeBucks-logo.svg" alt="logo" />
            </Link>
          </div>
          <div
            className={
              this.state.isMenuClicked
                ? 'menuGroup left toggle on'
                : 'menuGroup left toggle'
            }
          >
            <ul className="menuGroupList">
              <li className="menuContent">
                <Link to="#">COFFEE</Link>
              </li>
              <li className="menuContent">
                <Link to="#">MENU</Link>
              </li>
              <li className="menuContent">
                <Link to="#">STORE</Link>
              </li>
              <li className="menuContent">
                <Link to="#">WHAT'S NEW</Link>
              </li>
              <li className="menuContent">
                <Link to="/login-wookchanglee">SIGN-IN</Link>
              </li>
            </ul>
          </div>
          <i
            className="fas fa-bars"
            id="toggleBar"
            onClick={() => {
              this.setState({ isMenuClicked: !this.state.isMenuClicked });
            }}
          ></i>
        </header>
      </div>
    );
  }
}

export default Nav;
