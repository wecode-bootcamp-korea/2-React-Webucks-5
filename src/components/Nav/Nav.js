import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../../public/images/minjaekim/WeBucks-logo-1.svg";
import "./Nav.scss";

class TopNav extends Component {
  render() {
    return (
      <nav className="TopNav">
        <header className="section">
          <div className="menuGroup right">
            <Link to="/list-minjaekim">
              <img src="/images/minjaekim/WeBucks-logo-1.svg" alt="logo" />
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
                <Link to="/login-minjaekim">SIGN-IN</Link>
              </li>
            </ul>
          </div>
        </header>
      </nav>
    );
  }
}

export default TopNav;
