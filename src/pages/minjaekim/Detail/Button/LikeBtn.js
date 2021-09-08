import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

class LikeBtn extends Component {
  render() {
    console.log(this.props);
    const { isHeartColorRed, changeHeartBtnColor, commentList } = this.props;
    return (
      <button
        className="likeBtn"
        onClick={() => changeHeartBtnColor(commentList.id)}
        className={isHeartColorRed ? "LikeBtn beRedColor" : "LikeBtn"}
      >
        <FontAwesomeIcon icon={faThumbsUp} />
      </button>
    );
  }
}

export default LikeBtn;
