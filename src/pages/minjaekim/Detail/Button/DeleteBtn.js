import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackspace } from "@fortawesome/free-solid-svg-icons";

class DeleteBtn extends Component {
  render() {
    return (
      <button
        className="deleteBtn"
        onClick={() => this.deleteCommentBox(this.props.commentList.id)}
        id={this.props.commentList.id.id}
      >
        <FontAwesomeIcon icon={faBackspace} />
      </button>
    );
  }
}

export default DeleteBtn;
