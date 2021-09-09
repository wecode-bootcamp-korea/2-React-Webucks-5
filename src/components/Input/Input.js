import React, { Component } from 'react';
import './Input.scss';

class Input extends Component {
  render() {
    const { id, name, type, placeholder, handleInput } = this.props;

    return (
      <input
        id={id}
        className="Input"
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={handleInput}
      />
    );
  }
}

export default Input;
