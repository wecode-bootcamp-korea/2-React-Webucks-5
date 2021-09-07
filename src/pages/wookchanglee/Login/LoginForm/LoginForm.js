import React from 'react';
import './LoginForm.scss';

class LoginForm extends React.Component {
  render() {
    return (
      <form className="LoginForm">
        <input
          className="id"
          name="id"
          type="text"
          placeholder="전화번호, 사용자의 이름 또는 이메일"
          onChange={this.props.handleInput}
        />
        <input
          className="pw"
          name="pw"
          type="password"
          placeholder="비밀번호"
          onChange={this.props.handleInput}
        />
        <button
          className={
            this.props.id.includes('@') && this.props.pw.length > 4
              ? 'btn active'
              : 'btn'
          }
          disabled={!(this.props.id.includes('@') && this.props.pw.length > 4)}
          type="submit"
          onClick={this.props.goToList}
        >
          로그인
        </button>
        <i className="fas fa-eye"></i>
      </form>
    );
  }
}

export default LoginForm;
