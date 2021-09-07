import React, { Component, Suspense } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackspace } from "@fortawesome/free-solid-svg-icons";
import COMMENT_DATA from "./detailCommentData";
import ThumbsUpBtn from "./Button/ThumbsUpBtn";
import "./commentBox.scss";

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authorName: "",
      contents: "",
      commentList: COMMENT_DATA,
      currentCommentIndex: 2,
    };
  }

  handleAuthorInput = (e) => {
    this.setState({ authorName: e.target.value });
  };

  handleContentsInput = (e) => {
    this.setState({ contents: e.target.value });
  };

  sendComment = (e) => {
    const { authorName, contents, commentList, currentCommentIndex } =
      this.state;
    if (e.key === "Enter") {
      if (authorName === "" || contents === "") alert("Plz input Something");
      else {
        e.preventDefault();
        const newCommentList = {
          id: currentCommentIndex + 1,
          authorName: authorName,
          contents: contents,
        };
        this.setState({ currentCommentIndex: currentCommentIndex + 1 });
        this.setState({ commentList: [...commentList, newCommentList] });
        this.setState({ author: "" });
        this.setState({ contents: "" });
        e.target.value = "";
      }
    }
  };

  deleteCommentBox = (id) => {
    const { commentList } = this.state;
    if (window.confirm("really wanna delete?")) {
      this.setState({
        commentList: commentList.filter((comment) => comment.id !== id),
      });
    }
  };

  render() {
    return (
      <>
        <ul id="reviewStatus">
          {this.state.commentList.map((DATA) => {
            return (
              <li className="reviewList" id={DATA.id}>
                <span className="userId">{DATA.authorName}</span>
                <span className="reviewContents">{DATA.contents}</span>
                <ThumbsUpBtn />
                <button
                  className="deleteBtn"
                  onClick={() => this.deleteCommentBox(DATA.id)}
                  id={DATA.id}
                  ref={this.icon}
                >
                  <FontAwesomeIcon icon={faBackspace} />
                </button>
              </li>
            );
          })}
        </ul>
        <form
          id="reviewInputBox"
          onKeyPress={this.sendComment}
          key={this.state.key}
        >
          <input
            type="text"
            id="userInputIdBox"
            placeholder="작성자 명"
            required="required"
            onChange={this.handleAuthorInput}
          />
          <input
            type="text"
            id="contentsInputBox"
            placeholder="리뷰를 입력하세요"
            onChange={this.handleContentsInput}
          />
        </form>
      </>
    );
  }
}

export default CommentBox;
