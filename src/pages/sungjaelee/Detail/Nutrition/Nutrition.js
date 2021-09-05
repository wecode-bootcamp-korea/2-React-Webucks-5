import React, { Component } from 'react';

import NutritionLabel from './NutritionLabel/NutritionLabel';

import './Nutrition.scss';

class Nutrition extends Component {
  render() {
    const { data } = this.props;

    return (
      <div className="Nutrition">
        <div className="nutritionHeaderContainer">
          <h4>제품 영양 정보</h4>
          <p>Tall (톨) / 355ml (12 fl oz)</p>
        </div>

        <dl className="nutritionInfoContainer">
          {data[0].nutritionInfo.map((label, i) => {
            const { name, amount } = label;
            return <NutritionLabel key={i} name={name} amount={amount} />;
          })}
        </dl>

        {data[0].allergen && (
          <p className="allergyInfo">
            알레르기 유발요인: <span>{data[0].allergen}</span>
          </p>
        )}
      </div>
    );
  }
}

export default Nutrition;
