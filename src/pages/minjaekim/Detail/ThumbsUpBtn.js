import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

class ThumbsUpBtn extends Component {
  state = {
    liked: false,
  };
  isChangeBtn = (e) => {
    console.log(e.currentTarege);
    this.setState({ liked: !this.state.liked });
  };
  render() {
    console.log(this.props);
    return (
      <button
        onClick={this.isChangeBtn}
        className={this.state.liked ? "thumbsUpButton fill" : "thumbsUpButton"}
      >
        <FontAwesomeIcon icon={faThumbsUp} />
      </button>
    );
  }
}

export default ThumbsUpBtn;
