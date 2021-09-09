import React from 'react';
import './DetailImageBox.scss';

class DetailImageBox extends React.Component {
  render() {
    const { coffeeImg, coffeeTitle } = this.props;
    return (
      <div className="DetailImageBox">
        <img src={coffeeImg} alt={coffeeTitle} className="coffeeImage" />
      </div>
    );
  }
}

export default DetailImageBox;
