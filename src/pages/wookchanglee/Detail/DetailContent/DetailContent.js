import React from 'react';
import DetailImageBox from '../DetailImageBox/DetailImageBox';
import CoffeeDescription from '../CoffeeDescription/CoffeeDescription';
import NutritionFacts from '../NutritionFacts/NutritionFacts';
import Reviews from '../Reviews/Reviews';
import './DetailContent.scss';

class DetailContent extends React.Component {
  render() {
    return (
      <div className="DetailContent">
        <div className="left">
          <DetailImageBox coffeeData={this.props.coffeeData} />
        </div>
        <div className="right">
          <CoffeeDescription coffeeData={this.props.coffeeData} />
          <NutritionFacts nutrition={this.props.coffeeData.nutrition} />
          <Reviews />
        </div>
      </div>
    );
  }
}

export default DetailContent;
