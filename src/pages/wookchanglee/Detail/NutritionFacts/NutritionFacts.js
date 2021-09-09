import React from 'react';
import './NutritionFacts.scss';

class NutritionFacts extends React.Component {
  render() {
    const { coffeeNutrition } = this.props;
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
              <p>{coffeeNutrition.kcal}</p>
            </div>
            <div className="nutritionCol">
              <p>포화지방 (g)</p>
              <p>{coffeeNutrition.satFat}</p>
            </div>
            <div className="nutritionCol">
              <p>단백질 (g)</p>
              <p>{coffeeNutrition.protein}</p>
            </div>
          </div>
          <div className="nutritionRow">
            <div className="nutritionCol">
              <p>나트륨 (mg)</p>
              <p>{coffeeNutrition.sodium}</p>
            </div>
            <div className="nutritionCol">
              <p>당류 (g)</p>
              <p>{coffeeNutrition.sugars}</p>
            </div>
            <div className="nutritionCol">
              <p>카페인 (mg)</p>
              <p>{coffeeNutrition.caffeine}</p>
            </div>
          </div>
        </div>
        {this.props.coffeeNutrition?.allergy && (
          <p className="allergy">
            알레르기 유발 요인 : {coffeeNutrition.allergy}
          </p>
        )}
      </div>
    );
  }
}

export default NutritionFacts;
