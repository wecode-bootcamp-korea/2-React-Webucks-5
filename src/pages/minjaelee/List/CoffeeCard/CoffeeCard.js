import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import './CoffeeCard.scss';

class CoffeeCard extends Component {
  constructor() {
    super();
    this.state = {
      isLike: false,
      heartIcon: faHeart,
    };
  }

  handleClickAndChangeHeartColor = () => {
    this.setState({ isLike: !this.state.isLike });
    this.state.isLike
      ? this.setState({ heartIcon: faHeart })
      : this.setState({ heartIcon: fasHeart });
  };

  render() {
    return (
      <li>
        <Link to="/detail-minjaelee" className="detailLink">
          <img src={this.props.img} key={this.props.id} />
        </Link>
        <span>
          <p>{this.props.name}</p>
          <FontAwesomeIcon
            icon={this.state.heartIcon}
            className={this.state.isLike ? 'redHeart' : 'blackHeart'}
            onClick={this.handleClickAndChangeHeartColor}
          />
        </span>
      </li>
    );
  }
}

export default CoffeeCard;
