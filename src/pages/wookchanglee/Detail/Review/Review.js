import React from 'react';
import EachReview from '../EachReview/EachReview';
import './Review.scss';

class Review extends React.Component {
  constructor() {
    super();
    this.state = {
      review: [
        {
          username: 'coffee_lover',
          reviewContent: '진짜 진자 너무 너무 맛있어요!',
          id: 'riviewNum1',
        },
        {
          username: 'myloveIstCoffee',
          reviewContent: '오늘도 내일도 모레도 먹을거에요',
          id: 'reviewNum2',
        },
        {
          username: 'legend_dev',
          reviewContent: '전설이라는 말은 이때를 위해 존재한것',
          id: 'reviewNum3',
        },
      ],
      tempUsername: '',
      tempReviewContent: '',
    };
  }
  usernameRef = React.createRef();
  contentRef = React.createRef();

  writeReview = e => {
    e.target.className === 'id'
      ? this.setState({ tempUsername: e.target.value })
      : this.setState({ tempReviewContent: e.target.value });
  };

  submitReview = e => {
    if (e.key === 'Enter') {
      if (
        this.state.tempUsername.trim() !== '' &&
        this.state.tempUsername.trim() !== ''
      ) {
        let newarr = [...this.state.review];
        newarr.push({
          username: this.state.tempUsername,
          reviewContent: this.state.tempReviewContent,
        });
        this.setState({ review: newarr });
        this.usernameRef.current.value = '';
        this.contentRef.current.value = '';
        this.setState({
          tempReviewContent: '',
          tempUsername: '',
          id: 'reviewNum' + newarr.length,
        });
      } else {
        alert('빈칸은 입력할 수 없습니다🥲');
      }
    }
  };

  render() {
    return (
      <div className="Review">
        <h2>리뷰</h2>
        <div className="wrap">
          {this.state.review.map(el => {
            return (
              <EachReview
                username={el.username}
                reviewContent={el.reviewContent}
                key={el.id}
              />
            );
          })}
        </div>
        <form className="inputBox">
          <input
            className="id"
            ref={this.usernameRef}
            type="text"
            placeholder="아이디"
            onInput={this.writeReview}
            onKeyPress={this.submitReview}
          />
          <input
            className="content"
            ref={this.contentRef}
            type="text"
            placeholder="리뷰를 입력해주세요."
            onInput={this.writeReview}
            onKeyPress={this.submitReview}
          />
        </form>
      </div>
    );
  }
}

export default Review;
