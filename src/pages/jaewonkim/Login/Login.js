import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

class LoginJaeWonKim extends Component {
  constructor() {
    super();
    this.state = {
      inputUserName: '',
      inputPassword: '',
      isValidInput: false,
    };
  }

  handleInput = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, this.verifyInput);
  };

  verifyInput = () => {
    this.state.inputUserName.includes('@') &&
    this.state.inputPassword.length >= 8
      ? this.setState({ isValidInput: true })
      : this.setState({ isValidInput: false });
  };

  activateButton = () => {
    this.state.isValidInput
      ? this.setState({ buttonClassName: 'form-input active' })
      : this.setState({ buttonClassName: 'form-input' });
  };

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
          <form
            id="form"
            onKeyUp={this.activateButton}
            action="/list-jaewonkim"
          >
            <input
              className="form-input"
              onChange={this.handleInput}
              type="text"
              name="inputUserName"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              className="form-input"
              onChange={this.handleInput}
              type="password"
              name="inputPassword"
              placeholder="비밀번호"
            />
            <button
              className={this.state.buttonClassName}
              type="submit"
              disabled={!this.state.isValidInput}
            >
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
