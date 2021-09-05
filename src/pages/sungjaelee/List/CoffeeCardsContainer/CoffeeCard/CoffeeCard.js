import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartO } from '@fortawesome/free-regular-svg-icons';

import './CoffeeCard.scss';

class CoffeeCard extends Component {
  constructor() {
    super();
    this.state = {
      isLiked: false,
    };
    this.handleLike = this.handleLike.bind(this);
  }

  handleLike() {
    this.setState({ isLiked: !this.state.isLiked });
  }

  render() {
    const { isLiked } = this.state;
    const { name, img } = this.props;

    return (
      <li className="CoffeeCard">
        <Link
          className="imageContainer"
          to={{ pathname: '/detail-sungjaelee', state: {} }}
        >
          <img src={img} alt={name} />
        </Link>
        <div className="nameContainer">
          <p className="name">{name}</p>
          <FontAwesomeIcon
            className={isLiked ? 'likeBtn fas' : 'likeBtn'}
            icon={isLiked ? faHeart : faHeartO}
            size="lg"
            onClick={this.handleLike}
          />
        </div>
      </li>
    );
  }
}

export default CoffeeCard;
