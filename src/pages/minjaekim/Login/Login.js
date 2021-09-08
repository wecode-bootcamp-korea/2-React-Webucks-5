import React, { Component } from "react";
import { withRouter } from "react-router-dom";
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

  /* 다음 페이지로 넘어가는 구현 방법 2번 - Link 없이 HOC 활용하여 메소드 적용 
  // goToListPage = () => {
  //   this.props.history.push("/list-minjaekim");
  };
  */

  isValidInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { id, psw } = this.state;
    const isValidId = id.includes("@");
    const isValidPsw = psw.length > 4;
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
            {/* 다음 페이지로 넘어가는 구현 방법 1번 - Link의 to 프로퍼티 이용 */}
            <Link
              to={
                isValidId && isValidPsw ? "/list-minjaekim" : "login-minjaekim"
              }
            >
              <button
                type="submit"
                className={
                  isValidId && isValidPsw
                    ? "loginUserBtn changeColor"
                    : "loginUserBtn"
                }
                disabled={isValidId && isValidPsw ? false : "disabled"}
                /* 다음 페이지로 넘어가는 구현 방법 2번 - Link 없이 HOC 활용하여 메소드 적용 
                onClick={this.goToListPage}*/
              >
                로그인
              </button>
            </Link>
          </form>
          <Link
            to={isValidPsw ? "/login-minjaekim" : "/findPsw-minjaekim"}
            className="loginWindowFindUserPsw"
          >
            비밀번호를 잊으셨나요?
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
