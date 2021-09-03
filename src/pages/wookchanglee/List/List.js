import React, { Component } from 'react';
import Nav from '../../../components/Nav/Nav';
import Footer from '../../../components/Footer/Footer';
import CoffeeCardList from './CoffeeCardList/CoffeeCardList';
import COFFEELIST_DATA from './listMockData';
import './list.scss';

class List extends Component {
  constructor() {
    super();
    this.state = {
      COFFEELIST_DATA: COFFEELIST_DATA,
      coffeeCardsName: {
        coldBrewCoffeeCards: '콜드 브루 커피',
        brewedCoffeeCards: '브루드 커피',
      },
    };
  }

  render() {
    return (
      <div className="List">
        <Nav />
        <CoffeeCardList
          COFFEELIST_DATA={this.state.COFFEELIST_DATA.coldBrewCoffeeCards}
          coffeeCardsName={this.state.coffeeCardsName.coldBrewCoffeeCards}
        />
        <CoffeeCardList
          COFFEELIST_DATA={this.state.COFFEELIST_DATA.brewedCoffeeCards}
          coffeeCardsName={this.state.coffeeCardsName.brewedCoffeeCards}
        />
        <Footer />
      </div>
    );
  }
}

export default List;
