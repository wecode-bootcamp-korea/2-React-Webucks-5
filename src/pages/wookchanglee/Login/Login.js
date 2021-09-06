import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm/LoginForm';
import './Login.scss';

class Login extends Component {
  constructor() {
    super();
    this.state = { id: '', pw: '', isVerified: false };
  }

  goToList = () => {
    if (this.state.isVerified) this.props.history.push('/list-wookchanglee');
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, this.handleInputValidate);
  };

  handleInputValidate = () => {
    this.state.id.includes('@') && this.state.pw.length > 4
      ? this.setState({ isVerified: true })
      : this.setState({ isVerified: false });
  };

  render() {
    return (
      <section className="Login">
        <div className="inner">
          <img
            className="logo"
            src="/images/wookchanglee/WeBucks-logo.svg"
            alt="logo"
            onClick={this.goToList}
          />
          <LoginForm
            isVerified={this.state.isVerified}
            goToList={this.goToList}
            handleInput={this.handleInput}
            handleInputValidate={this.handleInputValidate}
          />
          <Link to="#" className="anotherApproach">
            비밀번호를 잊으셨나요?
          </Link>
        </div>
      </section>
    );
  }
}

export default Login;
