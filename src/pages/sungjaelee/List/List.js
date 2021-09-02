import React, { Component } from 'react';

import Nav from '../../../components/Nav/Nav';
import CoffeeCard from './CoffeeCard/CoffeeCard';

import LIST_BREWED_DATA from './listBrewedData';
import LIST_COLDBREW_DATA from './listColdBrewData';

import './List.scss';

class List extends Component {
  render() {
    const { onSelectedProduct } = this.props;

    return (
      <div className="List container">
        <Nav />
        {/* <!-- cold brew section --> */}
        <section className="typeContainer">
          <header className="headerContainer">
            <h2 className="title">콜드 브루 커피</h2>
            <p className="subtitle">
              디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
            </p>
          </header>
          {/* <!-- cold brew list --> */}
          <ul className="listContainer">
            {LIST_COLDBREW_DATA.map(coffee => {
              return (
                <CoffeeCard
                  key={coffee.id}
                  name={coffee.name}
                  img={coffee.img}
                  onSelectedProduct={onSelectedProduct}
                />
              );
            })}
          </ul>
        </section>

        {/* <!-- brewed coffee section --> */}
        <section className="typeContainer">
          <header className="headerContainer">
            <h2 className="title">브루드 커피</h2>
            <p className="subtitle">
              디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
            </p>
          </header>
          {/* <!-- brewed coffee list --> */}
          <ul className="listContainer">
            {LIST_BREWED_DATA.map(coffee => {
              return (
                <CoffeeCard
                  id={coffee.id}
                  name={coffee.name}
                  img={coffee.img}
                  key={coffee.id}
                />
              );
            })}
          </ul>
        </section>
        {/* <script src="js/list.js"></script> */}
        {/* <script
          src="https://kit.fontawesome.com/f4fddf9de0.js"
          crossorigin="anonymous"
        ></script> */}
      </div>
    );
  }
}

export default List;
