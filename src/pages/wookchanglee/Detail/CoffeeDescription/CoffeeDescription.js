import React from 'react';
import './CoffeeDescription.scss';

class CoffeeDescription extends React.Component {
  render() {
    const {
      coffeeTitle,
      coffeeEnglishTitle,
      coffeeDescription,
      coffeeLike,
      toggleHeart,
    } = this.props;
    return (
      <div className="CoffeeDescription">
        <div className="coffeeDescriptionHeader">
          <div className="title">
            <h1>{coffeeTitle}</h1>
            <p>{coffeeEnglishTitle}</p>
          </div>
          <div className="like">
            <i
              className={coffeeLike ? 'fas fa-heart' : 'far fa-heart'}
              onClick={toggleHeart}
            />
          </div>
        </div>
        <p className="coffeeDescriptionContent">{coffeeDescription}</p>
      </div>
    );
  }
}

export default CoffeeDescription;
