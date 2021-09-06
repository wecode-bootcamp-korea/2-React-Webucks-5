import React, { Component } from 'react';
import CoffeeCard from './CoffeeCard/CoffeeCard';
import LIST_COLDBREW_DATA from './ColdbrewData';
import LIST_BREWED_DATA from './BrewedData';
import TopNav from '../../../components/Nav/Nav';
import './List.scss';

class List extends Component {
  render() {
    return (
      <div className="listContainer">
        <TopNav />
        <main>
          <div className="secondBar">
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
            <ul className="coldbrewList">
              {LIST_COLDBREW_DATA.map(product => {
                return (
                  <CoffeeCard
                    key={product.name}
                    img={product.img}
                    name={product.name}
                  />
                );
              })}
            </ul>
          </div>
          <div className="thirdBar">
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
            <ul className="brewedList">
              {LIST_BREWED_DATA.map(product => {
                return (
                  <CoffeeCard
                    key={product.name}
                    img={product.img}
                    name={product.name}
                  />
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
