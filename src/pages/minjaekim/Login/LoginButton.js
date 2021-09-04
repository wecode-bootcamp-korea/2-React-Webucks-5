import React, { Component } from 'react'

class LoginButton extends Component {
  render() {
    return (
      <div>
        <button>
          {this.props.text}
        </button>
      </div>
    )
  }
}

export default LoginButton;
