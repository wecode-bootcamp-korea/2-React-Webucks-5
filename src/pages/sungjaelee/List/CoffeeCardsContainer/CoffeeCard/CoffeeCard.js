import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartO } from '@fortawesome/free-regular-svg-icons';
import './CoffeeCard.scss';

class CoffeeCard extends Component {
  render() {
    const { coffee, dataName, index, toggleLike } = this.props;
    const { name, img, isLiked } = coffee;

    return (
      <li className="CoffeeCard">
        <Link
          className="imageContainer"
          to={{
            pathname: '/detail-sungjaelee',
            state: { coffee, dataName, index },
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
            onClick={() => toggleLike(dataName, coffee)}
          />
        </div>
      </li>
    );
  }
}

export default CoffeeCard;
