import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm/LoginForm';
import './Login.scss';

class Login extends Component {
  constructor() {
    super();
    this.state = { id: '', pw: '' };
  }

  goToList = () => {
    if (this.state.id.includes('@') && this.state.pw.length > 4)
      this.props.history.push('/list-wookchanglee');
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
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
            id={this.state.id}
            pw={this.state.pw}
            goToList={this.goToList}
            handleInput={this.handleInput}
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
