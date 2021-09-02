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
          id: 1,
        },
        {
          username: 'myloveIstCoffee',
          reviewContent: '오늘도 내일도 모레도 먹을거에요',
          id: 2,
        },
        {
          username: 'legend_dev',
          reviewContent: '전설이라는 말은 이때를 위해 존재한것',
          id: 3,
        },
      ],
      tempUsername: '',
      tempReviewContent: '',
    };
  }

  usernameRef = React.createRef();
  contentRef = React.createRef();

  writeReview = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  deleteReveiw = id => {
    let reviewArr = [...this.state.review];
    reviewArr = reviewArr.filter(el => el.id !== id);
    this.setState({ review: reviewArr });
  };

  submitReview = e => {
    if (e.key === 'Enter') {
      if (
        this.state.tempUsername.trim() !== '' &&
        this.state.tempUsername.trim() !== ''
      ) {
        const reviewArr = [...this.state.review];
        const newid =
          reviewArr.length > 0 ? reviewArr[reviewArr.length - 1].id + 1 : 1;
        reviewArr.push({
          username: this.state.tempUsername,
          reviewContent: this.state.tempReviewContent,
          id: newid,
        });
        this.setState({ review: reviewArr });
        this.usernameRef.current.value = '';
        this.contentRef.current.value = '';
        this.setState({
          tempReviewContent: '',
          tempUsername: '',
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
                id={el.id}
                click={this.deleteReveiw}
              />
            );
          })}
        </div>
        <form className="inputBox">
          <input
            className="id"
            name="tempUsername"
            type="text"
            ref={this.usernameRef}
            placeholder="아이디"
            onInput={this.writeReview}
            onKeyPress={this.submitReview}
          />
          <input
            className="content"
            name="tempReviewContent"
            type="text"
            ref={this.contentRef}
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
