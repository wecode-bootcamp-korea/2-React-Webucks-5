import React from 'react';
import './DetailHeader.scss';

class DetailHeader extends React.Component {
  render() {
    const { coffeeType, coffeeTitle } = this.props;
    return (
      <div className="DetailHeader">
        <h1>{coffeeType}</h1>
        <p className="menuHistory">
          홈 &gt; MENU &gt; 음료 &gt; {coffeeType} &gt; {coffeeTitle}
        </p>
      </div>
    );
  }
}

export default DetailHeader;
