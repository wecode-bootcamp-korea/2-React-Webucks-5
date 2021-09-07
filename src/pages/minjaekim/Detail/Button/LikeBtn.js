import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

class LikeBtn extends Component {
  state = {
    toggleLikeBtn: false,
  };
  isChangeThumbsUpBtnColor = () => {
    const { toggleLikeBtn } = this.state;
    this.setState({ toggleLikeBtn: !toggleLikeBtn });
  };
  render() {
    return (
      <button
        onClick={this.isChangeThumbsUpBtnColor}
        className={this.state.toggleLikeBtn ? "LikeBtn beRedColor" : "LikeBtn"}
      >
        <FontAwesomeIcon icon={faThumbsUp} />
      </button>
    );
  }
}

export default LikeBtn;
