import React from 'react';
import './NutritionFacts.scss';

class NutritionFacts extends React.Component {
  render() {
    return (
      <div className="NutritionFacts">
        <div className="nutritionHeader">
          <p>제품 영양 정보</p>
          <p>Tall(톨) / 355ml (12 fl oz)</p>
        </div>
        <div className="nutritionContent">
          <div className="nutritionRow">
            <div className="nutritionCol">
              <p>1회 제공량 (kcal)</p>
              <p>420</p>
            </div>
            <div className="nutritionCol">
              <p>포화지방 (g)</p>
              <p>6</p>
            </div>
            <div className="nutritionCol">
              <p>단백질 (g)</p>
              <p>10</p>
            </div>
          </div>
          <div className="nutritionRow">
            <div className="nutritionCol">
              <p>나트륨 (mg)</p>
              <p>140</p>
            </div>
            <div className="nutritionCol">
              <p>당류 (g)</p>
              <p>53</p>
            </div>
            <div className="nutritionCol">
              <p>카페인 (mg)</p>
              <p>210</p>
            </div>
          </div>
        </div>
        <p className="allergy">알레르기 유발 요인 : 대두 / 우유</p>
      </div>
    );
  }
}

export default NutritionFacts;
