import React, { Component } from 'react';

import './Input.scss';

class Input extends Component {
  render() {
    const { id, name, type, placeholder, onInput } = this.props;

    return (
      <input
        id={id}
        className="Input"
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onInput}
      />
    );
  }
}

export default Input;
