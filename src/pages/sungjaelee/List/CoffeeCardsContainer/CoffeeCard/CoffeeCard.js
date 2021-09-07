import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartO } from '@fortawesome/free-regular-svg-icons';

import './CoffeeCard.scss';

class CoffeeCard extends Component {
  render() {
    const { coffee, i, dataName, handleLike } = this.props;
    const { name, img, isLiked } = coffee;

    return (
      <li className="CoffeeCard">
        <Link
          className="imageContainer"
          to={{
            pathname: '/detail-sungjaelee',
            state: { coffee, i, dataName },
          }}
        >
          <img src={img} alt={name} />
        </Link>
        <div className="nameContainer">
          <p className="name">{name}</p>
          <FontAwesomeIcon
            className={isLiked ? 'likeBtn fas' : 'likeBtn'}
            icon={isLiked ? faHeart : faHeartO}
            size="lg"
            onClick={() => handleLike(dataName, i)}
          />
        </div>
      </li>
    );
  }
}

export default CoffeeCard;
