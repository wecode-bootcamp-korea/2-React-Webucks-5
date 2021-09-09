import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import './Review.scss';

class Review extends Component {
  render() {
    const { userName, userReview, deleteReview } = this.props;
    return (
      <dl className="Review">
        <dt>{userName}</dt>
        <dd>{userReview}</dd>
        <FontAwesomeIcon
          className="far fa-trash-alt"
          onClick={deleteReview}
          icon={faTrashAlt}
        />
      </dl>
    );
  }
}

export default Review;
