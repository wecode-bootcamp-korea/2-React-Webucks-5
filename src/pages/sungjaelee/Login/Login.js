import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Login.scss';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      idInput: '',
      pwInput: '',
      isValidInput: false,
    };
    this.handleIdInput = this.handleIdInput.bind(this);
    this.handlePwInput = this.handlePwInput.bind(this);
    this.handleIsValidInput = this.handleIsValidInput.bind(this);
  }

  getBtnClasses() {
    const { isValidInput } = this.state;
    let btnClasses = 'loginBtn ';
    btnClasses += isValidInput ? 'active' : '';
    return btnClasses;
  }

  handleIdInput(e) {
    this.setState({ idInput: e.target.value }, this.handleIsValidInput);
  }

  handlePwInput(e) {
    this.setState({ pwInput: e.target.value }, this.handleIsValidInput);
  }

  handleIsValidInput() {
    const { idInput, pwInput } = this.state;
    this.setState({
      isValidInput: idInput.includes('@') && pwInput.length >= 5,
    });
  }

  render() {
    const { idInput, pwInput, isValidInput } = this.state;

    console.log(
      'RENDER:',
      'idInput:',
      idInput,
      'pwInput:',
      pwInput,
      'isValidInput',
      isValidInput
    );

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
              onChange={this.handleIdInput}
            />
            <div className="pwInputWrap">
              <input
                id="userPw"
                type="password"
                placeholder="비밀번호"
                onChange={this.handlePwInput}
              />
              <span id="showHideText" className="invisible">
                Show
              </span>
            </div>
            <Link to="/list-sungjaelee">
              <button className={this.getBtnClasses()} type="submit">
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
