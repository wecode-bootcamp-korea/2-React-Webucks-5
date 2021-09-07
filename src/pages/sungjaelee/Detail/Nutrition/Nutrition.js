import React, { Component } from 'react';

import NutritionLabel from './NutritionLabel/NutritionLabel';

import './Nutrition.scss';

class Nutrition extends Component {
  render() {
    const { coffee } = this.props;
    const { nutritionInfo, allergen } = coffee;

    return (
      <div className="Nutrition">
        <div className="nutritionHeaderContainer">
          <h4>제품 영양 정보</h4>
          <p>Tall (톨) / 355ml (12 fl oz)</p>
        </div>

        <dl className="nutritionInfoContainer">
          {nutritionInfo.map((label, i) => {
            const { name, amount } = label;
            return <NutritionLabel key={i} name={name} amount={amount} />;
          })}
        </dl>

        {allergen && (
          <p className="allergyInfo">
            알레르기 유발요인: <span>{allergen}</span>
          </p>
        )}
      </div>
    );
  }
}

export default Nutrition;
