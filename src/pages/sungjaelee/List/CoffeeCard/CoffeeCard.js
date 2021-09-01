import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './CoffeeCard.scss';

class CoffeeCard extends Component {
  goToDetailPage = () => {
    console.log(this.props.history);
    this.props.history.push('/detail-sungjaelee');
    // this.props.history.goBack();
  };

  render() {
    const { name, imgUrl } = this.props;

    return (
      <li className="CoffeeCard item">
        {/* <Link className="imageContainer" to="/detail">
          <img src={imgUrl} alt={name} />
        </Link> */}
        <div className="imageContainer">
          <img src={imgUrl} alt={name} onClick={this.goToDetailPage} />
        </div>
        <div className="nameContainer">
          <p className="name">{name}</p>
          <span>❤️</span>
          {/* <i className="likeBtn far fa-heart"></i> */}
        </div>
      </li>
    );
  }
}

export default withRouter(CoffeeCard);
