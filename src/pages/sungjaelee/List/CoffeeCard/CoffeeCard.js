import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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
  goToDetailPage = () => {
    console.log(this.props.history);
    this.props.history.push('/detail-sungjaelee');
    // this.props.history.goBack();
  };

  handleLike() {
    console.log('hello');
    this.setState({ isLiked: !this.state.isLiked });
  }

  render() {
    const { isLiked } = this.state;
    const { name, img } = this.props;

    return (
      <li className="CoffeeCard item">
        {/* <Link className="imageContainer" to="/detail">
          <img src={img} alt={name} />
        </Link> */}
        <div className="imageContainer">
          <img src={img} alt={name} onClick={this.goToDetailPage} />
        </div>
        <div className="nameContainer">
          <p className="name">{name}</p>
          <FontAwesomeIcon
            className={isLiked ? 'likeBtn fas' : 'likeBtn'}
            icon={isLiked ? faHeart : faHeartO}
            size="lg"
            onClick={this.handleLike}
          />
          {/* <i className="likeBtn far fa-heart"></i> */}
        </div>
      </li>
    );
  }
}

export default withRouter(CoffeeCard);
