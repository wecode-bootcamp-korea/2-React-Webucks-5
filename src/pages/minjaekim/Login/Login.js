import React, {Component} from "react";
import {Link} from 'react-router-dom';
import "./Login.scss";

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  handleIdInput = (e) => {
    console.log(e.target.value);
    this.setState({
      IdAndPswValue: e.target.value
    })
  }

  render() {
        return (
          <div className="Login">
            <div className="loginWindow">
                <h1 className="loginWindowTitle">WeBucks</h1>
                <form
                  action="list.html"
                  className="loginWindowInputBox"
                  id="loginForm">
                  <input id="loginUserId" type="text" placeholder="전화번호, 사용자 이름 또는 이메일" autoFocus="autofocus"
                  onChange={this.handleIdInput}
                  />
                  <input id="loginUserPsw" type="password" placeholder="비밀번호" 
                  onChange={this.handleIdInput}/>
                  <Link to="/List-minjaekim" className="ButtonWrapper" > 
                    <button id="loginUserBtn" disabled="disabled">로그인</button> 
                  </Link>
                </form>
                <a href={'#'} className="loginWindowFindUserPsw">비밀번호를 잊으셨나요?</a>
            </div>
          </div>
        );
    }
}

export default Login;
