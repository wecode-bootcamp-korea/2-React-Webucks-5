import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      idInput: '',
      pwInput: '',
    };
  }

  handleIdPwInput = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { idInput, pwInput } = this.state;
    return (
      <div className="loginBodyContainer">
        <section className="loginContainer">
          <section className="loginTitle">
            <div className="loginTitleName">WeBucks</div>
          </section>
          <form className="loginForm" action="/list-minjaelee" method="get">
            <input
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              name="idInput"
              className="loginFormId"
              onChange={this.handleIdPwInput}
            />
            <input
              type="password"
              placeholder="비밀번호"
              name="pwInput"
              className="loginFormPw"
              onChange={this.handleIdPwInput}
            />
            <button
              className={
                idInput.includes('@') && pwInput.length >= 5
                  ? 'activeBtn'
                  : 'deactiveBtn'
              }
            >
              <Link to="/list-minjaelee" className="formBtn">
                <span className="loginFormBtnSpan">로그인</span>
              </Link>
            </button>
          </form>
          <section className="loginFooter">
            <a href="#">비밀번호를 잊으셨나요?</a>
          </section>
        </section>
      </div>
    );
  }
}

export default Login;
