import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import './Review.scss';

library.add(faHeartRegular, faHeartSolid, faTrashAlt);

class Review extends Component {
  constructor() {
    super();
    this.state = {
      isLikedHeart: false,
    };
  }

  toggleHeart = () => {
    const { isLikedHeart } = this.state;
    this.setState({ isLikedHeart: !isLikedHeart });
  };

  render() {
    const { userName, userReview, deleteReview } = this.props;
    const { isLikedHeart } = this.state;
    const { toggleHeart } = this;
    return (
      <dl className="Review">
        <dt>{userName}</dt>
        <dd>{userReview}</dd>
        <FontAwesomeIcon
          className="far fa-heart"
          onClick={toggleHeart}
          icon={faHeartRegular}
        />
        <FontAwesomeIcon
          className={isLikedHeart ? 'fas fa-heart active' : 'fas fa-heart'}
          onClick={toggleHeart}
          icon={faHeartSolid}
        />
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
