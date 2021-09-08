import React from 'react';
import Review from '../Review/Review';
import './Reviews.scss';

class Reviews extends React.Component {
  constructor() {
    super();
    this.state = {
      review: [],
      tempUsername: '',
      tempReviewContent: '',
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/reviewListData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({ review: data });
      });
  }

  usernameRef = React.createRef();
  contentRef = React.createRef();

  writeReview = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  deleteReview = id => {
    let reviewArr = [...this.state.review];
    reviewArr = reviewArr.filter(el => el.id !== id);
    this.setState({ review: reviewArr });
  };

  submitReview = e => {
    if (e.key === 'Enter') {
      if (
        this.state.tempUsername.trim() !== '' &&
        this.state.tempReviewContent.trim() !== ''
      ) {
        const reviewArr = [...this.state.review];
        const newId =
          reviewArr.length > 0 ? reviewArr[reviewArr.length - 1].id + 1 : 1;
        reviewArr.push({
          username: this.state.tempUsername,
          reviewContent: this.state.tempReviewContent,
          id: newId,
        });
        this.setState({
          review: reviewArr,
          tempReviewContent: '',
          tempUsername: '',
        });
        this.usernameRef.current.value = '';
        this.contentRef.current.value = '';
      } else {
        alert('빈칸은 입력할 수 없습니다🥲');
      }
    }
  };

  render() {
    return (
      <div className="Reviews">
        <h2>리뷰</h2>
        <div className="reviewList">
          {this.state.review.map(el => {
            return (
              <Review
                username={el.username}
                reviewContent={el.reviewContent}
                key={el.id}
                id={el.id}
                deleteReview={this.deleteReview}
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

export default Reviews;
