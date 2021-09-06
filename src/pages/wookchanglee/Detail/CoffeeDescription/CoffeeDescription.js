import React from 'react';
import './CoffeeDescription.scss';

class CoffeeDescription extends React.Component {
  constructor() {
    super();
    this.state = { isHeartFill: false };
  }
  render() {
    return (
      <div class="CoffeeDescription">
        <div className="coffeeDescriptionHeader">
          <div className="title">
            <h1>아이스크림 블렌딩 콜드 브루</h1>
            <p>Ice Cream Blending Cold Brew</p>
          </div>
          <div className="like">
            <i
              className={
                this.state.isHeartFill ? 'fas fa-heart' : 'far fa-heart'
              }
              onClick={() => {
                this.setState({ isHeartFill: !this.state.isHeartFill });
              }}
            ></i>
          </div>
        </div>
        <p className="coffeeDescriptionContent">
          콜드 브루와 바닐라빈이 콕콕 박힌 아이스크림이 블렌딩 되어 진하고
          부드러운 콜드 브루 풍미를 느낄 수 있는 콜드 브루
          <br />* 아이스크림 블렌딩 콜드 브루는 BOGO쿠폰, 무료음료 쿠폰 등 일부
          쿠폰 사용이 제한됩니다
        </p>
      </div>
    );
  }
}

export default CoffeeDescription;
