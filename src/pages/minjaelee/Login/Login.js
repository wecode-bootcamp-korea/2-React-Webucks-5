import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

class Login extends Component {
  render() {
    return (
      <div className="body_container">
        <section className="login-title">
          <div className="login-title__name">WeBucks</div>
        </section>
        <form className="login-form" action="/list.html" method="get">
          <input
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            className="login-form__id"
          />
          <input
            type="password"
            placeholder="비밀번호"
            className="login-form__pw"
          />
          <button>
            <Link to="/list-minjaelee" className="login-form__btn">
              <span className="login-form__btnspan">로그인</span>
            </Link>
          </button>
        </form>
        <section className="login-footer">
          <a href="#">비밀번호를 잊으셨나요?</a>
        </section>
      </div>
    );
  }
}

export default Login;
