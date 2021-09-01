import React, { Component } from 'react';
import TopNav from '../../../components/Nav/Nav';
import './List.scss';
import COLDBREW_DATA from './ColdbrewData';
import BREWED_DATA from './BrewedData';

class List extends Component {
  render() {
    return (
      <div className="body-container">
        <TopNav />
        <main>
          <div className="bar2">
            <h2>콜드 브루 커피</h2>
            <span>
              <img
                src="https://image.istarbucks.co.kr/common/img/menu/logo_decaf.png"
                alt="coffee"
              />
              디카페인 에스프레소 샷 추가 기능 (일부 음료 제외)
            </span>
          </div>
          <div className="coldbrew">
            <ul className="coldbrewLine">
              {COLDBREW_DATA.map(product => {
                return (
                  <li>
                    <img src={product.imgSrc} />
                    <p>{product.name}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="bar3">
            <h2>브루드 커피</h2>
            <span>
              <img
                src="https://image.istarbucks.co.kr/common/img/menu/logo_decaf.png"
                alt="coffee"
              />
              디카페인 에스프레소 샷 추가 기능 (일부 음료 제외)
            </span>
          </div>
          <div className="brewed">
            <ul className="brewed__line">
              {BREWED_DATA.map(product => {
                return (
                  <li>
                    <img src={product.imgSrc} />
                    <p>{product.name}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </main>
      </div>
    );
  }
}

export default List;
