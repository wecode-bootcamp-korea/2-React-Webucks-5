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
              ? this.state.COFFEELIST_DATA.coldBrewCoffeeCards.coffees
              : []
          }
          coffeeCardsName={
            this.state.COFFEELIST_DATA.coldBrewCoffeeCards
              ? this.state.COFFEELIST_DATA.coldBrewCoffeeCards.title
              : ''
          }
        />
        <CoffeeCardList
          COFFEELIST_DATA={
            this.state.COFFEELIST_DATA.brewedCoffeeCards
              ? this.state.COFFEELIST_DATA.brewedCoffeeCards.coffees
              : []
          }
          coffeeCardsName={
            this.state.COFFEELIST_DATA.brewedCoffeeCards
              ? this.state.COFFEELIST_DATA.brewedCoffeeCards.title
              : ''
          }
        />
        <Footer />
      </div>
    );
  }
}

export default List;
