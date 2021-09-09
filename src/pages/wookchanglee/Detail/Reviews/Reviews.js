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
        <form className="inputBox" onSubmit={submitReview}>
          <input
            className="id"
            name="tempUsername"
            type="text"
            placeholder="아이디"
            value={tempUsername}
            onInput={writeReview}
          />
          <input
            className="content"
            name="tempReviewContent"
            type="text"
            placeholder="리뷰를 입력해주세요."
            value={tempReviewContent}
            onInput={writeReview}
          />
          <input id="submitInput" type="submit" value="전송" />
        </form>
      </div>
    );
  }
}

export default Reviews;
