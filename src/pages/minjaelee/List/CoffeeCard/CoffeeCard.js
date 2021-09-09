import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faRedHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './CoffeeCard.scss';

class CoffeeCard extends Component {
  constructor() {
    super();
    this.state = {
      isLike: false,
    };
  }

  handleClick = () => {
    const { isLike } = this.state;
    this.setState({ isLike: !isLike });
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
            icon={this.state.isLike ? faRedHeart : faHeart}
            className={this.state.isLike ? 'redHeart' : 'blackHeart'}
            onClick={this.handleClick}
          />
        </span>
      </li>
    );
  }
}

export default CoffeeCard;
