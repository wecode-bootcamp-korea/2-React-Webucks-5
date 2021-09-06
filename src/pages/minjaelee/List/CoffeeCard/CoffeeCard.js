import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import './CoffeeCard.scss';

class CoffeeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLike: false,
      heartIcon: faHeart,
    };
  }

  ChangeColor = e => {
    this.setState({ isLike: !this.state.isLike });
    this.state.isLike
      ? this.setState({ heartIcon: faHeart })
      : this.setState({ heartIcon: fasHeart });
  };

  render() {
    return (
      <li>
        <img src={this.props.img} key={this.props.id} />
        <span>
          <p>{this.props.name}</p>
          <FontAwesomeIcon
            icon={this.state.heartIcon}
            className={this.state.isLike ? 'redHeart' : 'blackHeart'}
            onClick={this.ChangeColor}
          />
        </span>
      </li>
    );
  }
}

export default CoffeeCard;
