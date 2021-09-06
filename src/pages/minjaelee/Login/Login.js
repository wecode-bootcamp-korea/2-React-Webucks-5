import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      idInput: '',
      pwInput: '',
      isActiveButton: false,
    };
  }

  handleIdInput = event => {
    const { value } = event.target;
    this.setState({ idInput: value }, this.changeBtnColor);
  };

  handlePwInput = event => {
    const { value } = event.target;
    this.setState({ pwInput: value }, this.changeBtnColor);
  };

  changeBtnColor = () => {
    const isValid =
      this.state.idInput.includes('@') && this.state.pwInput.length >= 5;
    isValid
      ? this.setState({ isActiveButton: true })
      : this.setState({ isActiveButton: false });
  };

  render() {
    return (
      <div className="loginContainer">
        <section className="loginTitle">
          <div className="loginTitleName">WeBucks</div>
        </section>
        <form className="loginForm" action="/list.html" method="get">
          <input
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            className="loginFormId"
            onChange={this.handleIdInput}
          />
          <input
            type="password"
            placeholder="비밀번호"
            className="loginFormPw"
            onChange={this.handlePwInput}
          />
          <button
            className={this.state.isActiveButton ? 'activeBtn' : 'deactiveBtn'}
          >
            <Link to="/list-minjaelee" className="formBtn">
              <span className="loginFormBtnSpan">로그인</span>
            </Link>
          </button>
        </form>
        <section className="loginFooter">
          <a href="#">비밀번호를 잊으셨나요?</a>
        </section>
      </div>
    );
  }
}

export default Login;
