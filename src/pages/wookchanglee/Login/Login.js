/*eslint-disable */
import React, { Component } from 'react';
import './Login.scss';

class Login extends Component {
  constructor() {
    super();
    this.state = { id: '', pw: '', isVerified: false };
  }

  goToList = () => {
    this.state.isVerified
      ? this.props.history.push('/list-wookchanglee')
      : null;
  };

  handleInput = e => {
    e.target.className === 'login-form__id'
      ? this.setState({ id: e.target.value }, this.handleInputValidate)
      : this.setState({ pw: e.target.value }, this.handleInputValidate);
  };

  handleInputValidate = () => {
    this.state.id.includes('@') && this.state.pw.length > 4
      ? this.setState({ isVerified: true })
      : this.setState({ isVerified: false });
  };

  render() {
    return (
      <div className="Login">
        <section className="section--login">
          <div className="inner">
            <img
              className="section--login__logo"
              src="/images/wookchanglee/WeBucks-logo.svg"
              alt="logo"
              onClick={this.goToList}
            />
            <form className="login-form">
              <input
                className="login-form__id"
                type="text"
                placeholder="전화번호, 사용자의 이름 또는 이메일"
                onChange={this.handleInput}
              />
              <input
                className="login-form__pw"
                type="password"
                placeholder="비밀번호"
                onChange={this.handleInput}
              />
              <button
                className={
                  this.state.isVerified
                    ? 'login-form__btn active'
                    : 'login-form__btn'
                }
                type="submit"
                onClick={this.goToList}
              >
                로그인
              </button>
              <i className="fas fa-eye"></i>
            </form>
            <a href="#" className="section--login__another-approch">
              비밀번호를 잊으셨나요?
            </a>
          </div>
        </section>
      </div>
    );
  }
}

export default Login;
