import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      psw: "",
    };
  }

  isValidInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { id, psw } = this.state;
    return (
      <div className="Login">
        <div className="loginWindow">
          <h1 className="loginWindowTitle">WeBucks</h1>
          <form action="#" className="loginWindowInputBox" id="loginForm">
            <input
              className="loginUserId"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              autoFocus="autofocus"
              name="id"
              value={this.state.id}
              onChange={this.isValidInput}
            />
            <input
              className="loginUserPsw"
              type="password"
              placeholder="비밀번호"
              name="psw"
              value={this.state.psw}
              onChange={this.isValidInput}
            />
            <button
              type="submit"
              className={
                id.includes("@") && psw.length > 4
                  ? "loginUserBtn changeColor"
                  : "loginUserBtn"
              }
            >
              {id.includes("@") && psw.length > 4 ? (
                <Link to="/list-minjaekim" className="ButtonWrapper">
                  로그인
                </Link>
              ) : (
                <Link to="/login-minjaekim" className="ButtonWrapper">
                  로그인
                </Link>
              )}
            </button>
          </form>
          <Link to="#" className="loginWindowFindUserPsw">
            비밀번호를 잊으셨나요?
          </Link>
        </div>
      </div>
    );
  }
}

export default Login;
