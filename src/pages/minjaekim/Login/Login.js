import { fas } from "@fortawesome/free-solid-svg-icons";
import React, {Component} from "react";
import {Link} from 'react-router-dom';
import "./Login.scss";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idValue: '',
            pswValue: '',
            isChangeBtn:false
        }
    }

    handleIdInput=(e)=>{
      this.setState({idValue: e.target.value}
      , this.isValidIdAndPsw)
    }
    
    handlePswInput = (e) => {
        this.setState({pswValue: e.target.value}
        , this.isValidIdAndPsw)
    }
    
    isValidIdAndPsw = () => {
      if(this.state.idValue.includes('@') && this.state.pswValue.length>=5){
        //이를 변수로 들고 올 수 있는가?
      this.changeBtnAfterValid();
      } else {
        this.setState({isChangeBtn:false})
      }
    }

    changeBtnAfterValid = () => {
      this.setState({
        isChangeBtn: true,
      })
    }

    render() {
        return (
            <div className="Login">
                <div className="loginWindow">
                    <h1 className="loginWindowTitle">WeBucks</h1>
                    <form action="list.html" className="loginWindowInputBox" id="loginForm" >
                        <input
                            className="loginUserId"
                            type="text"
                            placeholder="전화번호, 사용자 이름 또는 이메일"
                            autoFocus="autofocus"
                            onChange={this.handleIdInput}
                            />
                        <input
                            className="loginUserPsw"
                            type="password"
                            placeholder="비밀번호"
                            onChange={this.handlePswInput}
                            />
                        <button
                            className= {this.state.isChangeBtn ? 'loginUserBtn changeBtnColor':'loginUserBtn'}>
                            <Link to='/list-minjaekim' className="ButtonWrapper">로그인</Link>
                        </button>
                    </form>
                    <a href={'#'} className="loginWindowFindUserPsw">비밀번호를 잊으셨나요?</a>
                </div>
            </div>
        );
    }
}

export default Login;
