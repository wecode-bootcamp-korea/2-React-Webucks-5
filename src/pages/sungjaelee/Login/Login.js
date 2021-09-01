import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Login.scss';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <section className="box">
          <img
            className="logo"
            src="/images/sungjaelee/WeBucks-logo.svg"
            alt="logo"
          />
          <form id="loginForm" action="#" autoComplete="off">
            <input
              id="userId"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <div className="pwInputWrap">
              <input id="userPw" type="password" placeholder="비밀번호" />
              <span id="showHideText" className="invisible">
                Show
              </span>
            </div>
            <Link to="/list-sungjaelee">
              <button className="loginBtn" type="submit">
                로그인
              </button>
            </Link>
          </form>
          <p className="forgotPw">비밀번호를 잊으셨나요?</p>
        </section>
      </div>
    );
  }
}

export default Login;
