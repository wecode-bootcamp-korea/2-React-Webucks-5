import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CoffeCard.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';

library.add(faHeartRegular, faHeartSolid);

class CoffeCard extends Component {
  render() {
    return (
      <dt className="CoffeCard">
        <Link to={this.props.link}>
          <img alt={this.props.alt} src={this.props.src} />
        </Link>
        <h3>
          {this.props.text}
          <FontAwesomeIcon className="far fa-heart" icon={faHeartRegular} />
        </h3>
      </dt>
    );
  }
}

export default CoffeCard;
