import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idInput: '',
      pwInput: '',
      isActive: false,
    };
  }

  handleIdInput = event => {
    this.setState({ idInput: event.target.value }, this.isValidInput);
  };

  handlePwInput = event => {
    this.setState({ pwInput: event.target.value }, this.isValidInput);
  };

  isValidInput = () => {
    this.state.idInput.includes('@') && this.state.pwInput.length >= 5
      ? this.setState({ isActive: true })
      : this.setState({ isActive: false });
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
          <button className={this.state.isActive ? 'activeBtn' : 'unactiveBtn'}>
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
