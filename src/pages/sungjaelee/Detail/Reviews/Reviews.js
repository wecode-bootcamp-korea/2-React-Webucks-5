import React, { Component, createRef } from 'react';
import Review from './Review/Review';
import './Reviews.scss';

class Reviews extends Component {
  constructor() {
    super();
    this.reviewInputRef = createRef();
    this.state = {
      userId: 'codekim',
      reviewInput: '',
    };
  }

  handleInputChange = e => {
    this.setState({ reviewInput: e.target.value });
  };

  resetReviewInput = e => {
    this.setState({ reviewInput: '' });
    e.preventDefault();
    this.reviewInputRef.current.blur();
  };

  render() {
    const { userId, reviewInput } = this.state;
    const { reviews, submitReview, likeReview, deleteReview } = this.props;
    const { reviewInputRef, handleInputChange, resetReviewInput } = this;

    return (
      <div className="Reviews">
        <h4 className="reviewsHeader">리뷰</h4>
        {reviews.map(review => {
          return (
            <Review
              key={review.id}
              review={review}
              likeReview={likeReview}
              deleteReview={deleteReview}
            />
          );
        })}
        <form
          id="newReviewForm"
          onSubmit={e => {
            submitReview([
              ...reviews,
              {
                id: reviews.length ? reviews[reviews.length - 1].id + 1 : 1,
                userId,
                reviewContent: reviewInput,
                isLiked: false,
              },
            ]);
            resetReviewInput(e);
          }}
          autoComplete="off"
        >
          <input // had trouble forwarding ref to <Input />
            id="newReview"
            type="text"
            placeholder="리뷰를 입력해주세요."
            ref={reviewInputRef}
            value={reviewInput}
            onChange={handleInputChange}
          />
        </form>
      </div>
    );
  }
}

export default Reviews;
