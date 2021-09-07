import React from 'react';
import './DetailImageBox.scss';

class DetailImageBox extends React.Component {
  render() {
    return (
      <div className="DetailImageBox">
        <img
          src={this.props.coffeeData.img}
          alt={this.props.coffeeData.title}
          className="coffeeImage"
        />
      </div>
    );
  }
}

export default DetailImageBox;
