import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartO } from '@fortawesome/free-regular-svg-icons';
import './Review.scss';

class Review extends Component {
  render() {
    const { review, likeReview, deleteReview } = this.props;
    const { userId, reviewContent, isLiked } = review;

    return (
      <div className="Review">
        <span className="reviewerId">{userId}</span>
        <p className="review">{reviewContent}</p>
        <FontAwesomeIcon
          className={isLiked ? 'commentLikeBtn fas' : 'commentLikeBtn'}
          icon={isLiked ? faHeart : faHeartO}
          onClick={() => likeReview(review)}
        />
        <FontAwesomeIcon
          className="commentDeleteBtn"
          icon={faTrashAlt}
          onClick={() => deleteReview(review)}
        />
      </div>
    );
  }
}

export default Review;
