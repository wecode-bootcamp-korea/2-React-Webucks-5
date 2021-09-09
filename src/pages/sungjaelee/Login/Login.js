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
    };
  }

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { idInput, pwInput } = this.state;
    const { handleInput } = this;
    const isValidInput = idInput.includes('@') && pwInput.length >= 5;

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
              name="idInput"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              handleInput={handleInput}
            />
            <div className="pwInputWrap">
              <Input
                id="userPw" //don't need? (not used)
                name="pwInput"
                type="password"
                placeholder="비밀번호"
                handleInput={handleInput}
              />
              <span id="showHideText" className="invisible">
                Show
              </span>
            </div>
            {isValidInput ? ( // messy?
              <Link to="/list-sungjaelee">
                <button className="loginBtn active" type="submit">
                  로그인
                </button>
              </Link>
            ) : (
              <button className="loginBtn" type="button">
                로그인
              </button>
            )}
          </form>
          <p className="forgotPw">비밀번호를 잊으셨나요?</p>
        </section>
      </div>
    );
  }
}

export default Login;
