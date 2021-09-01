/* eslint-disable */
import React, { Component } from 'react';
import Nav from '../../../components/Nav/Nav';
import Footer from '../../../components/Footer/Footer';
import CoffeeCard from './CoffeeCard/CoffeeCard';
import COFFEELIST_DATA from './listMockData';
import './list.scss';

class List extends Component {
  constructor() {
    super();
    this.state = { coffeLIistData: COFFEELIST_DATA };
  }
  render() {
    return (
      <div className="List body__container">
        <Nav />
        <section className="product-list">
          <div className="product-list__header section">
            <h2 className="product-list__title">콜드 브루 커피</h2>
            <img
              className="product-list__logo"
              src="//image.istarbucks.co.kr/common/img/menu/logo_decaf.png"
              alt="coffee logo"
            />
            <p className="product-list__content">
              디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
            </p>
          </div>

          <div className="product-list__product">
            {this.state.coffeLIistData.coldBrewCoffeeCards.map(
              (coffee, idx) => {
                return <CoffeeCard img={coffee.img} title={coffee.title} />;
              }
            )}
          </div>
        </section>

        <section className="product-list">
          <div className="product-list__header section">
            <h2 className="product-list__title">브루드 커피</h2>
            <img
              className="product-list__logo"
              src="//image.istarbucks.co.kr/common/img/menu/logo_decaf.png"
              alt="coffee logo"
            />
            <p className="product-list__content">
              디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
            </p>
          </div>

          <div className="product-list__product">
            {this.state.coffeLIistData.brewedCoffeeCards.map((coffee, idx) => {
              return <CoffeeCard img={coffee.img} title={coffee.title} />;
            })}
          </div>
        </section>

        <Footer></Footer>
      </div>
    );
  }
}

export default List;
