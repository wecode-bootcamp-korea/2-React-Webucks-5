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
      liked:[]
    };
    this.icon = React.createRef()
  }

  handleAuthorInputKeyPress = (e) => {
    this.setState({ authorName: e.target.value });
  };

  handleContextInputKeyPress = (e) => {
    this.setState({ context: e.target.value });
  };

  senContextCommentBox = (e) => {
    const { commmentIndex, authorName, context, commentList } = this.state;
    if (e.key === "Enter") {
      if (authorName === "" || context === "") alert("Plz input Something");
      else {
        const newCommentObject = {
          id: commmentIndex + 1,
          authorName: authorName,
          context: context,
        };
        this.setState({ commmentIndex: commmentIndex+1})
        this.setState({ commentList: [...commentList, newCommentObject] });
        e.preventDefault();
        this.setState({ context: "" });
        e.target.value = "";
        this.setState({ author: "" });
        // text input에 접근하여 value 값 초기화하는 방법? ref밖에 없을지?
      }
    }
  };

  deleteCommentBox = (id) => {
    const { commentList } = this.state;
    if (window.confirm("really wanna delete?")) {
      this.setState({commentList: commentList.filter(comment => comment.id!==id)})
    }
  }
  
  // 만약 state값이 비어있으면 filter로 추가하기
  // 만약 state값이 들어있으면 filter값 삭제하기
  isActive = (e) => {
    const btnId = e.currentTarget.id
    // 클릭한 버튼의 고유 id
    const { commentList, liked} = this.state
    if(commentList.find(el=> el.id === btnId)){
      // 클릭한 버튼과 목데이터에 해당하는 버튼의 아이디가 일치하면
      this.setState({commentList: commentList.filter(el => el.className)})
    } else {

    }
    // for (let i = 0; i <commentList.length; i++){
    // if(btnId == commentList[i].id) 
    // this.setState({liked: !liked})
    // }
  }
  
  

  // for(let num = 0; num < commentList.length; num++){
  //   console.log(e.currentTarget.id)
  //   console.log(commentList[num].id)
  //   if (commentList[num].id === e.currentTarget.id) return this.setState({commentList: this.state.commentList.splice(num,1)})
  // }    

  // 버튼을 클릭했을 때 클릭한 버튼이 포함된 li를 삭제해줘야한다.
  // 현재 맵을 통해서 목데이터 만큼의 리스트를 만들고 있다. 초기 리스트갯수 목데이터 갯수 3개,
  // 댓글을 입력하면 생성된 객체가 목데이터로 올라가서 새로운 댓글이 추가되며 버튼 태그들도 리스트와 함께 나온다.

  render() {
    return (
      <>
        <ul id="reviewStatus">
          {this.state.commentList.map((DATA,IDX) => {
            return (
              <li className="reviewList" id={DATA.id}>
                <span className="userId">{DATA.authorName}</span>
                <span className="reviewContents">{DATA.context}</span>
                <button 
                className={this.state.liked ? "thumbsUpButton fillThumbsUpIcon" : "thumbsUpButton"}
                onClick={this.isActive}
                id={IDX}
                >
                  <FontAwesomeIcon icon={faThumbsUp} />
                </button>
                <button
                  className="deleteButton"
                  onClick={() => this.deleteCommentBox(DATA.id)}
                  id={IDX}
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
