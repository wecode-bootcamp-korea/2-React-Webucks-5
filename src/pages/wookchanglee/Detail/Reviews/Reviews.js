import React from 'react';
import Review from '../Review/Review';
import './Reviews.scss';

class Reviews extends React.Component {
  render() {
    const {
      writeReview,
      submitReview,
      deleteReview,
      toggleHeartInReview,
      tempReviewContent,
      tempUsername,
    } = this.props;
    return (
      <div className="Reviews">
        <h2>리뷰</h2>
        <div className="reviewList">
          {this.props.coffeeReviews.map(review => {
            return (
              <Review
                id={review.id}
                key={review.id}
                username={review.username}
                reviewContent={review.reviewContent}
                like={review.like}
                deleteReview={deleteReview}
                toggleHeartInReview={toggleHeartInReview}
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
