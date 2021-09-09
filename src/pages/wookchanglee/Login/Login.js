import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm/LoginForm';
import './Login.scss';

class Login extends Component {
  render() {
    return (
      <section className="Login">
        <div className="inner">
          <img
            className="logo"
            src="/images/wookchanglee/WeBucks-logo.svg"
            alt="logo"
          />
          <LoginForm />
          <Link to="#" className="anotherApproach">
            비밀번호를 잊으셨나요?
          </Link>
        </div>
      </section>
    );
  }
}

export default Login;
