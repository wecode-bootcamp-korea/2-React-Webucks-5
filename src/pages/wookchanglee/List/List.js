import React, { Component } from 'react';
import CoffeeCardList from './CoffeeCardList/CoffeeCardList';
import Nav from '../../../components/Nav/Nav';
import Footer from '../../../components/Footer/Footer';
import './list.scss';

class List extends Component {
  constructor() {
    super();
    this.state = {
      COFFEELIST_DATA: [],
      coffeeCardsName: {
        coldBrewCoffeeCards: '콜드 브루 커피',
        brewedCoffeeCards: '브루드 커피',
      },
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/coffeeListData.json')
      .then(res => res.json())
      .then(res => {
        this.setState({ COFFEELIST_DATA: res });
      });
  }

  render() {
    return (
      <div className="List">
        <Nav />
        <CoffeeCardList
          COFFEELIST_DATA={
            this.state.COFFEELIST_DATA.coldBrewCoffeeCards
              ? this.state.COFFEELIST_DATA.coldBrewCoffeeCards
              : []
          }
          coffeeCardsName={this.state.coffeeCardsName.coldBrewCoffeeCards}
        />
        <CoffeeCardList
          COFFEELIST_DATA={
            this.state.COFFEELIST_DATA.brewedCoffeeCards
              ? this.state.COFFEELIST_DATA.brewedCoffeeCards
              : []
          }
          coffeeCardsName={this.state.coffeeCardsName.brewedCoffeeCards}
        />
        <Footer />
      </div>
    );
  }
}

export default List;
