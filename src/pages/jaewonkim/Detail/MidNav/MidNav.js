import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MidNav.scss';

class MidNav extends Component {
  render() {
    return (
      <nav className="MidNav">
        <h2>콜드 브루 커피</h2>
        <img
          id="nav-title"
          alt="Cold Brew"
          src="https://image.istarbucks.co.kr/common/img/menu/tit/drink_tit9.png"
        />
        <Link to="login-jaewonkim">홈</Link>
        {' > '}
        <Link to="/list-jaewonkim">MENU</Link>
        {' > '}
        <Link to="#">음료</Link>
        {' > '}
        <Link to="#">콜드 브루</Link>
        {' > '}
        <Link to="/detail-jaewonkim">제주 비자림 콜드 브루</Link>
      </nav>
    );
  }
}

export default MidNav;
