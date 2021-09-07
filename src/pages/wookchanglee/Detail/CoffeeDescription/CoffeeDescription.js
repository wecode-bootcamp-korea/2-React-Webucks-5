import React from 'react';
import './CoffeeDescription.scss';

class CoffeeDescription extends React.Component {
  constructor() {
    super();
    this.state = { isHeartFill: false };
  }
  render() {
    return (
      <div className="CoffeeDescription">
        <div className="coffeeDescriptionHeader">
          <div className="title">
            <h1>{this.props.coffeeData.title}</h1>
            <p>{this.props.coffeeData.englishTitle}</p>
          </div>
          <div className="like">
            <i
              className={
                this.state.isHeartFill ? 'fas fa-heart' : 'far fa-heart'
              }
              onClick={() => {
                this.setState({ isHeartFill: !this.state.isHeartFill });
              }}
            ></i>
          </div>
        </div>
        <p className="coffeeDescriptionContent">
          {this.props.coffeeData.description}
        </p>
      </div>
    );
  }
}

export default CoffeeDescription;
