import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartO } from '@fortawesome/free-regular-svg-icons';

import './Review.scss';

class Review extends Component {
  render() {
    const { r, i, onComment } = this.props;
    const { userId, review, isLiked } = r;

    return (
      <div className="Review">
        <span className="reviewerId">{userId}</span>
        <p className="review">{review}</p>
        <FontAwesomeIcon
          className={isLiked ? 'commentLikeBtn fas' : 'commentLikeBtn'}
          icon={isLiked ? faHeart : faHeartO}
          onClick={() => onComment('like', r, i)}
        />
        <FontAwesomeIcon
          className="commentDeleteBtn"
          icon={faTrashAlt}
          onClick={() => onComment('delete', r)}
        />
      </div>
    );
  }
}

export default Review;
