import React, { Component } from 'react';
import './Review.scss';

class Review extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      comment: '',
      allComments: [],
    };
  }

  handleInput = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleEnterAndSubmit = e => {
    const { id, comment, allComments } = this.state;
    if (e.key === 'Enter') {
      if (id === '' || comment === '') {
        alert('이름과 리뷰를 모두 작성해주세요!');
      } else {
        e.preventDefault();
        const addAllComments = {
          id: id,
          comment: comment,
        };
        this.setState({
          allComments: [...allComments, addAllComments],
        });
        e.target.value = ''; // 하나의 input에서만 초기화 됨.
      }
    }
  };

  deleteReview = idx => {
    const { allComments } = this.state;
    const { copiedAllComments } = allComments;
    copiedAllComments.splice(idx, 1);

    this.setState({ allComments: copiedAllComments });
  };

  render() {
    return (
      <form>
        <section className="commentReview">
          <div className="commentTitle">리뷰</div>
          <hr />
          <ul>
            {this.state.allComments.map((comme, idx) => (
              <li key={idx}>
                <span className="allCommentsId"> {comme.id}</span>
                <span className="allCommentsPw"> {comme.comment}</span>
                <button
                  className="allCommentsBtn"
                  onClick={this.deleteReview}
                ></button>
              </li>
            ))}
          </ul>
          <form className="commentForm" onKeyPress={this.handleEnterAndSubmit}>
            <input
              type="text"
              name="id"
              className="reviewInputId"
              placeholder="아이디"
              onChange={this.handleInput}
            />
            <input
              type="text"
              name="comment"
              className="reviewInputComment"
              placeholder="리뷰를 입력해주세요. 등록하시려면 'ENTER' 키를 누르세요"
              onChange={this.handleInput}
            />
          </form>
        </section>
      </form>
    );
  }
}

export default Review;
