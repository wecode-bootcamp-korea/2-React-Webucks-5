import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Input from '../../../components/Input/Input';

import './Login.scss';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      idInput: '',
      pwInput: '',
      isValidInput: false,
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleValidityCheck = this.handleValidityCheck.bind(this);
  }

  handleInput(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value }, this.handleValidityCheck);
  }

  handleValidityCheck() {
    const { idInput, pwInput } = this.state;
    const isValidInput = idInput.includes('@') && pwInput.length >= 5;
    this.setState({ isValidInput });
  }

  render() {
    const { isValidInput } = this.state;
    const { handleInput } = this;

    return (
      <div className="Login">
        <section className="box">
          <img
            className="logo"
            src="/images/sungjaelee/WeBucks-logo.svg"
            alt="logo"
          />
          <form id="loginForm" action="#" autoComplete="off">
            <Input
              id="userId" // don't need? (not used)
              name="idInput" //same as state name
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onInput={handleInput}
            />
            <div className="pwInputWrap">
              <Input
                id="userPw" //don't need? (not used)
                name="pwInput" //same as state name
                type="password"
                placeholder="비밀번호"
                onInput={handleInput}
              />
              <span id="showHideText" className="invisible">
                Show
              </span>
            </div>
            <Link to="/list-sungjaelee">
              <button
                className={isValidInput ? 'loginBtn active' : 'loginBtn'}
                type="submit"
              >
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
