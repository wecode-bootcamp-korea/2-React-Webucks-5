import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

class LoginJaeWonKim extends Component {
  constructor() {
    super();
    this.state = {
      inputUserName: '',
      inputPassword: '',
    };
  }

  handleInput = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  isValidInput = () => {
    const { inputUserName, inputPassword } = this.state;
    return inputUserName.includes('@') && inputPassword.length >= 8;
  };

  render() {
    const { handleInput, isValidInput } = this;
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
          <form id="form" onKeyUp={isValidInput} action="/list-jaewonkim">
            <input
              className="form-input"
              onChange={handleInput}
              type="text"
              name="inputUserName"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              className="form-input"
              onChange={handleInput}
              type="password"
              name="inputPassword"
              placeholder="비밀번호"
            />
            <button
              className={isValidInput() ? 'form-input active' : 'form-input'}
              type="submit"
              disabled={!isValidInput()}
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
