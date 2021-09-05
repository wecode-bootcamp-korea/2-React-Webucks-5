import React, { Component } from 'react';

import './NutritionLabel.scss';

class NutritionLabel extends Component {
  render() {
    const { name, amount } = this.props;

    return (
      <div className="NutritionLabel">
        <dt>{name}</dt>
        <dd>{amount}</dd>
      </div>
    );
  }
}

export default NutritionLabel;
