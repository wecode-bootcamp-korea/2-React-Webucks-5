import React, { Component } from 'react';
import './Review.scss';

class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newComment: '',
      allComments: [
        {
          id: 'coffee_lover',
          comment: '너무 맛있어요!',
        },
        {
          id: 'choco7',
          comment: '여기가 서울 종로구 제주라는 도시입니까?',
        },
        {
          id: 'legend_dev',
          comment: '그래도 화이트 모카가 맛있죠',
        },
      ],
    };
  }

  commentInput = e => {
    this.setState({ newComment: e.target.value });
  };

  submitComment = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.state.allComments.push({
        comment: this.state.newComment,
      });
      e.target.value = '';
    }

    this.setState({ newComment: '', allComments: this.state.allComments });
  };

  render() {
    return (
      <form>
        <section className="detailReview">
          <div className="detailReviewTitle">리뷰</div>
          <hr />
          <ul>
            {this.state.allComments.map((e, idx) => (
              <li key={idx}>
                <span className="reviewId"> {e.id}</span>
                <span className="reviewPw"> {e.comment}</span>
              </li>
            ))}
          </ul>
          <input
            type="text"
            className="reviewInputComment"
            placeholder="리뷰를 입력해주세요. (아이디는 입력하지 않으셔도 됩니다.)"
            onChange={this.commentInput}
            onKeyPress={this.submitComment}
          />
        </section>
      </form>
    );
  }
}

export default Review;
