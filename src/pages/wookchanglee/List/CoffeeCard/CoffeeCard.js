import React from 'react';
import { Link } from 'react-router-dom';
import './coffeeCard.scss';

class CoffeeCard extends React.Component {
  state = { isHeartFilled: false };

  render() {
    return (
      <div className="CoffeeCard">
        <Link to="/detail-wookchanglee">
          <div className="wrapper">
            <img src={this.props.img} alt={this.props.title} />
          </div>
        </Link>
        <div className="title">
          <p>{this.props.title}</p>
          <i
            className={
              this.state.isHeartFilled ? 'fas fa-heart' : 'far fa-heart'
            }
            onClick={() => {
              this.setState({
                isHeartFilled: !this.state.isHeartFilled,
              });
            }}
          ></i>
        </div>
      </div>
    );
  }
}

export default CoffeeCard;
