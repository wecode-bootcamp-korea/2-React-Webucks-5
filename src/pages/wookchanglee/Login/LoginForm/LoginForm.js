import React from 'react';
import { withRouter } from 'react-router-dom';
import './LoginForm.scss';

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = { id: '', pw: '' };
  }

  isValid = () => this.state.id.includes('@') && this.state.pw.length > 4;

  goToList = e => {
    this.props.history.push('/list-wookchanglee');
  };

  writeInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form className="LoginForm">
        <input
          className="id"
          name="id"
          type="text"
          placeholder="전화번호, 사용자의 이름 또는 이메일"
          onChange={this.writeInput}
        />
        <input
          className="pw"
          name="pw"
          type="password"
          placeholder="비밀번호"
          onChange={this.writeInput}
        />
        <button
          className={this.isValid() ? 'btn active' : 'btn'}
          disabled={!this.isValid()}
          type="submit"
          onClick={this.isValid() ? this.goToList : null}
        >
          로그인
        </button>
        <i className="fas fa-eye" />
      </form>
    );
  }
}

export default withRouter(LoginForm);
