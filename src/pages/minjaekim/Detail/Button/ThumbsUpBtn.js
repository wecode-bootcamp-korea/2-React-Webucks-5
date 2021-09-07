import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

class ThumbsUpBtn extends Component {
  state = {
    isThumbsBtnColorRed: false,
  };
  isChangeThumbsUpBtnColor = (e) => {
    const { isThumbsBtnColorRed } = this.state;
    this.setState({ isThumbsBtnColorRed: !isThumbsBtnColorRed });
  };
  render() {
    return (
      <button
        onClick={this.isChangeThumbsUpBtnColor}
        className={
          this.state.isThumbsBtnColorRed
            ? "thumbsUpBtn changeColorThumbsUpBtn"
            : "thumbsUpBtn"
        }
      >
        <FontAwesomeIcon icon={faThumbsUp} />
      </button>
    );
  }
}

export default ThumbsUpBtn;
