import React, { Component } from "react";
import COMMENT_DATA from "./detailCommentData";
import LikeBtn from "./Button/LikeBtn";
import DeleteBtn from "./Button/DeleteBtn";
import "./commentSection.scss";

class CommentSection extends Component {
  input = React.createRef();
  constructor(props) {
    super(props);
    this.state = {
      authorName: "",
      contents: "",
      commentList: COMMENT_DATA,
      currentCommentIndex: 2,
    };
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  sendComment = (e) => {
    const { authorName, contents, commentList, currentCommentIndex } =
      this.state;
    if (e.key === "Enter") {
      if (authorName === "" || contents === "")
        alert("작성자 명과 리뷰를 모두 작성해주세요!🥺");
      else {
        e.preventDefault();
        const newCommentList = {
          id: currentCommentIndex + 1,
          authorName: authorName,
          contents: contents,
        };
        this.setState({ currentCommentIndex: currentCommentIndex + 1 });
        this.setState({ commentList: [...commentList, newCommentList] });
        this.setState({ authorName: "" });
        this.setState({ contents: "" });
        e.target.value = "";
      }
    }
    this.input.current.focus();
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
    const { authorName, contents } = this.state;
    const { isHeartColorRed, changeHeartBtnColor } = this.props;
    return (
      <section className="CommentSection">
        <header className="coffeeCommentHeader">
          <h4 className="commentTitle">리뷰</h4>
        </header>
        <form
          class="CommentBox"
          onKeyPress={this.sendComment}
          onChange={this.handleInput}
        >
          <ul className="commentStatus">
            {this.state.commentList.map((DATA) => {
              return (
                <li className="commentList" key={DATA.id} id={DATA.id}>
                  <span className="userId">{DATA.authorName}</span>
                  <span className="contents">{DATA.contents}</span>
                  <LikeBtn
                    isHeartColorRed={changeHeartBtnColor}
                    changeHeartBtnColor={() => changeHeartBtnColor(DATA.id)}
                    commentList={this.state.commentList}
                  />
                  <DeleteBtn
                    onDeleteBtn={() => this.deleteCommentBox(DATA.id)}
                    commentList={this.state.commentList}
                  />
                </li>
              );
            })}
          </ul>
          <div className="commentInputBox">
            <input
              type="text"
              className="userInputId"
              placeholder="작성자 명"
              name="authorName"
              value={authorName}
              ref={this.input}
            />
            <input
              type="text"
              className="contentsInput"
              placeholder="리뷰를 입력하세요"
              name="contents"
              value={contents}
              // onChange={this.handleInput}
            />
          </div>
        </form>
      </section>
    );
  }
}

export default CommentSection;
