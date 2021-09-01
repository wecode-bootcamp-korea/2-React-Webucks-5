import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../../styles/_common.scss';
import './Login.scss';

class LoginJaeWonKim extends Component {
  render() {
    return (
      <div className="Login">
        <header>
          <h1>WeBucks Login Page</h1>
        </header>

        <section>
          <img
            id="logo"
            alt="WeBucks Logo"
            src="/images/jaewonkim/WeBucks-logo.svg"
          />

          <form id="form">
            <input
              className="form-input"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              className="form-input"
              type="password"
              placeholder="비밀번호"
            />
            <button className="form-input" type="submit">
              로그인
            </button>
          </form>

          <Link id="lost" to="#">
            비밀번호를 잊으셨나요?
          </Link>
        </section>
      </div>
    );
  }
}

export default LoginJaeWonKim;
