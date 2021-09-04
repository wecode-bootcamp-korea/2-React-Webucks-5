import React, {Component, Suspense} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons'
import {faBackspace} from '@fortawesome/free-solid-svg-icons'
import COMMNET_DATA from './detailCommentData'

class commentBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      authorName : "",
      context : "",
      commentList : COMMNET_DATA,
      key: 0
      }
    }

    handleAuthorInputKeyPress = (e) => {
      this.setState({authorName: e.target.value})
    }
    

    handleContextInputKeyPress = (e) => {
      this.setState({context:e.target.value})
    }

    senContextCommentBox =(e)=>{
      const {authorName, context, commentList} = this.state
      if(e.key === 'Enter'){
        if (authorName ==="" || context === "") alert('Plz input Something')
        else {
          const newCommentObject = { authorName: authorName, context: context };
          this.setState({commentList:[...commentList, newCommentObject]})
          e.preventDefault();
          console.log(e)
          this.setState({context:""})
          e.target.value =""
          // text input에 접근하여 value 값 초기화하는 방법? ref밖에 없을지?
        }
        }
      }

    render() {
      const {author, context} = this.state
        return (
          <>
            <ul id="reviewStatus">
              {this.state.commentList.map((DATA)=> {
                return (
                  <li className="reviewList">
                    <span className="userId">{DATA.authorName}</span>
                    <span className="reviewContents">{DATA.context}</span>
                    <FontAwesomeIcon icon={faThumbsUp}/>
                    <FontAwesomeIcon icon={faBackspace}/>
                  </li>
                    )
                  }
                )
              }
            </ul>
              <form id="reviewInputBox" onKeyPress={this.senContextCommentBox} key={this.state.key}>
                <input type="text" id="userInputIdBox" placeholder="작성자 명" required="required" onChange={this.handleAuthorInputKeyPress}/>
                <input type="text" id="contentsInputBox" placeholder="리뷰를 입력하세요" onChange={this.handleContextInputKeyPress}/>
              </form>
            </>
        )
    }
}

export default commentBox
