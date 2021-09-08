import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackspace } from "@fortawesome/free-solid-svg-icons";

class DeleteBtn extends Component {
  render() {
    const { onDeleteBtn, commentList } = this.props;
    return (
      <button
        className="deleteBtn"
        onClick={() => onDeleteBtn(commentList.id)}
        id={commentList.id}
      >
        <FontAwesomeIcon icon={faBackspace} />
      </button>
    );
  }
}

export default DeleteBtn;
