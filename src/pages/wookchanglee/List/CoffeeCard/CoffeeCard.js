import React from 'react';
import { Link } from 'react-router-dom';
import './coffeeCard.scss';

class CoffeeCard extends React.Component {
  render() {
    return (
      <div className="CoffeeCard">
        <Link to="/detail-wookchanglee">
          <div className="image-wraper">
            <img src={this.props.img} alt={this.props.title} />
          </div>
        </Link>
        <div className="image-title">
          <p>{this.props.title}</p>
          <i className="far fa-heart"></i>
        </div>
      </div>
    );
  }
}

export default CoffeeCard;
