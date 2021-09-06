import React, { Component, Suspense } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faBackspace } from "@fortawesome/free-solid-svg-icons";
import COMMNET_DATA from "./detailCommentData";
import "./commentBox.scss";

class commentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commmentIndex: 2,
      authorName: "",
      context: "",
      commentList: COMMNET_DATA,
      isLiked: false,
      btnId: [],
    };
    this.icon = React.createRef();
  }

  handleAuthorInputKeyPress = (e) => {
    this.setState({ authorName: e.target.value });
  };

  handleContextInputKeyPress = (e) => {
    this.setState({ context: e.target.value });
  };

  senContextCommentBox = (e) => {
    const { commmentIndex, authorName, context, commentList, isLiked } =
      this.state;
    if (e.key === "Enter") {
      if (authorName === "" || context === "") alert("Plz input Something");
      else {
        const newCommentObject = {
          id: commmentIndex + 1,
          authorName: authorName,
          context: context,
          isLiked: isLiked,
        };
        this.setState({ commmentIndex: commmentIndex + 1 });
        this.setState({ commentList: [...commentList, newCommentObject] });
        e.preventDefault();
        this.setState({ context: "" });
        e.target.value = "";
        this.setState({ author: "" });
        // text input에 접근하여 value 값 초기화하는 방법? ref밖에 없을지?
      }
    }
  };

  //  <처음 시도했던 접근 방식 >
  // 버튼을 클릭했을 때 클릭한 버튼이 포함된 li를 삭제해줘야한다.
  // 현재 맵을 통해서 목데이터 만큼의 리스트를 만들고 있다. 초기 리스트갯수 목데이터 갯수 3개,
  // 댓글을 입력하면 생성된 객체가 목데이터로 올라가서 새로운 댓글이 추가되며 버튼 태그들도 리스트와 함께 나온다.
  // for(let num = 0; num < commentList.length; num++){
  //   console.log(e.currentTarget.id)
  //   console.log(commentList[num].id)
  //   if (commentList[num].id === e.currentTarget.id) return this.setState({commentList: this.state.commentList.splice(num,1)})
  // }

  deleteCommentBox = (id) => {
    const { commentList } = this.state;
    if (window.confirm("really wanna delete?")) {
      this.setState({
        commentList: commentList.filter((comment) => comment.id !== id),
      });
    }
  };

  // 모든 UI 변경은 Render(state), 즉 state 값 변경으로 이뤄진다.
  // 1. liked의 state 값이 비어있으면 현재 좋아요 버튼에 어떠한 버튼도 눌리지 않았다는 것
  // => filter 메서드를 사용해 내가 클릭한 좋아요 버튼의 id와 일치한 버튼의 state의 값을 추가해준다.
  // => 좋아요 버튼의 색이 빨강으로 변한다는 건 state 값이 추가되면 동시에 해당 버튼의 className도 변경되어 toggled된다는 것을 의미
  // 2. liked의 state 값에 값이 들어가 있으면 현재 특정 좋아요 버튼이 눌렸다는 것
  // => filter 메서드를 사용해 값 삭제하기
  // => 좋아요 버튼의 색이 원래대로 돌아간다는 건 state 값이 삭제됨과 동시에 해당 버튼의 className도 변경되어 toggled 해준다는 것
  isActive = (e, idx) => {
    // 클릭한 버튼의 고유 id, index 값
    const btn = e.currentTarget.id;
    const { commentList, isLiked, btnId } = this.state;
    if (commentList.find((e) => e.id == btn)) {
      console.log(isLiked);
      if (commentList.find((e) => e.isLike == false)) {
        this.setState({
          isLiked: !isLiked,
        });
      }
    }
  };

  // if(commentList.find(comment => comment.id == btnId)){
  //   this.setState({
  //     liked: liked.concat(btnId)
  //   })
  //   console.log(liked)
  // }
  // if(commentList.find(el=> el.id === btnId)){
  //   클릭한 버튼과 목데이터에 해당하는 버튼의 아이디가 일치하면
  //   this.setState({commentList: commentList.filter(el => el.className)})
  // } else {

  // }
  // for (let i = 0; i <commentList.length; i++){
  // if(btnId == commentList[i].id)
  // this.setState({liked: !liked})
  // }

  render() {
    return (
      <>
        <ul id="reviewStatus">
          {this.state.commentList.map((DATA) => {
            return (
              <li className="reviewList" id={DATA.id}>
                <span className="userId">{DATA.authorName}</span>
                <span className="reviewContents">{DATA.context}</span>
                <button
                  className={
                    this.state.isLiked ? "fillThumbsUpIcon" : "thumbsUpButton"
                  }
                  onClick={(e, idx) => this.isActive(e, idx)}
                  id={DATA.id}
                >
                  <FontAwesomeIcon icon={faThumbsUp} />
                </button>

                <button
                  className="deleteButton"
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
          onKeyPress={this.senContextCommentBox}
          key={this.state.key}
        >
          <input
            type="text"
            id="userInputIdBox"
            placeholder="작성자 명"
            required="required"
            onChange={this.handleAuthorInputKeyPress}
          />
          <input
            type="text"
            id="contentsInputBox"
            placeholder="리뷰를 입력하세요"
            onChange={this.handleContextInputKeyPress}
          />
        </form>
      </>
    );
  }
}

export default commentBox;
