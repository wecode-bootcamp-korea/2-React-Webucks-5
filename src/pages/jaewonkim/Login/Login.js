import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../../styles/_common.scss';
import './Login.scss';

class LoginJaeWonKim extends Component {
  constructor() {
    super();
    this.state = {
      inputUserName: '',
      inputPassword: '',
      buttonClassName: 'form-input',
      buttonDisabled: true,
      formAction: '',
    };
  }

  handleInputUserName = event => {
    this.setState({ inputUserName: event.target.value });
  };

  handleInputPassword = event => {
    this.setState({ inputPassword: event.target.value });
  };

  isValidInput = () => {
    return (
      this.state.inputUserName.includes('@') &&
      this.state.inputPassword.length >= 8
    );
  };

  verifyForm = () => {
    this.isValidInput()
      ? this.setState({
          buttonClassName: 'form-input active',
          buttonDisabled: false,
          formAction: '/list-jaewonkim',
        })
      : this.setState({ buttonClassName: 'form-input', buttonDisabled: true });
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
            onKeyUp={this.verifyForm}
            action={this.state.formAction}
          >
            <input
              className="form-input"
              onChange={this.handleInputUserName}
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              className="form-input"
              onChange={this.handleInputPassword}
              type="password"
              placeholder="비밀번호"
            />
            <button
              className={this.state.buttonClassName}
              type="submit"
              disabled={this.state.buttonDisabled}
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
