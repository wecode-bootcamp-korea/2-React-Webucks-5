import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import './CoffeeCard.scss';

library.add(faHeartRegular, faHeartSolid);

class CoffeeCard extends Component {
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
    const { isLikedHeart } = this.state;
    const { toggleHeart } = this;
    return (
      <dt className="CoffeeCard">
        <Link to={this.props.link}>
          <img alt={this.props.alt} src={this.props.src} />
        </Link>
        <h3>
          {this.props.name}
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
        </h3>
      </dt>
    );
  }
}

export default CoffeeCard;
