import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {} from '@fortawesome/free-solid-svg-icons';
// import {} from '@fortawesome/fontawesome-svg-core';

import './CoffeeCard.scss';

class CoffeeCard extends Component {
  goToDetailPage = () => {
    console.log(this.props.history);
    this.props.history.push('/detail-sungjaelee');
    // this.props.history.goBack();
  };

  render() {
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
          {/* <span>❤️</span> */}
          <FontAwesomeIcon icon="coffee" size={40} />
          {/* <i className="likeBtn far fa-heart"></i> */}
        </div>
      </li>
    );
  }
}

export default withRouter(CoffeeCard);
