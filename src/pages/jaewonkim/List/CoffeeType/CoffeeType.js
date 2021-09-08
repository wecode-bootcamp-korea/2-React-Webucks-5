import React, { Component } from 'react';
import './CoffeeType.scss';

class CoffeeType extends Component {
  render() {
    return (
      <dl className="CoffeeType">
        <dt>
          <h2>{this.props.title}</h2>
          <img
            alt="Decaf Coffee Icon"
            src="https://image.istarbucks.co.kr/common/img/menu/logo_decaf.png"
          />
          <p>디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</p>
        </dt>
      </dl>
    );
  }
}

export default CoffeeType;
