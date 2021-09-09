import React from 'react';
import './DetailImageBox.scss';

class DetailImageBox extends React.Component {
  render() {
    return (
      <div className="DetailImageBox">
        <img
          src={this.props.coffeeImg}
          alt={this.props.coffeeTitle}
          className="coffeeImage"
        />
      </div>
    );
  }
}

export default DetailImageBox;
