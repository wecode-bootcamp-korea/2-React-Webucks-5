import React, { Component } from 'react';

import CoffeeCardsContainer from './CoffeeCardsContainer/CoffeeCardsContainer';
import Nav from '../../../components/Nav/Nav';
import Footer from '../../../components/Footer/Footer';

import LIST_COLDBREW_DATA from './listColdBrewData';
import LIST_BREWED_DATA from './listBrewedData';

import './List.scss';

class List extends Component {
  render() {
    return (
      <div className="List">
        <div className="container">
          <Nav />
          <CoffeeCardsContainer
            data={LIST_COLDBREW_DATA}
            title="콜드 브루 커피"
            subtitle="디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)"
          />
          <CoffeeCardsContainer
            data={LIST_BREWED_DATA}
            title="브루드 커피"
            subtitle="디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)"
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default List;
