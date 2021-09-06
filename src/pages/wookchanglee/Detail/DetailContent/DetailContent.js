import React from 'react';
import DetailImageBox from '../DetailImageBox/DetailImageBox';
import CoffeeDescription from '../CoffeeDescription/CoffeeDescription';
import NutritionFacts from '../NutritionFacts/NutritionFacts';
import Review from '../Review/Review';
import './DetailContent.scss';

class DetailContent extends React.Component {
  render() {
    return (
      <div className="DetailContent">
        <div className="left">
          <DetailImageBox />
        </div>
        <div className="right">
          <CoffeeDescription />
          <NutritionFacts />
          <Review />
        </div>
      </div>
    );
  }
}

export default DetailContent;
