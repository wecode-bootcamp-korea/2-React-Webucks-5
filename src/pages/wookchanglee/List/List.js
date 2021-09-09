import React, { Component } from 'react';
import CoffeeCardList from './CoffeeCardList/CoffeeCardList';
import Nav from '../../../components/Nav/Nav';
import Footer from '../../../components/Footer/Footer';
import './List.scss';

class List extends Component {
  constructor() {
    super();
    this.state = {
      coldBrewCoffeeCards: null,
      brewedCoffeeCards: null,
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/coffeeListData.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          coldBrewCoffeeCards: res.coldBrewCoffeeCards,
          brewedCoffeeCards: res.brewedCoffeeCards,
        });
      });
  }

  render() {
    return (
      <div className="List">
        <Nav />
        <CoffeeCardList
          COFFEELIST_DATA={
            this.state.coldBrewCoffeeCards
              ? this.state.coldBrewCoffeeCards.coffees
              : []
          }
          coffeeCardsName={
            this.state.coldBrewCoffeeCards
              ? this.state.coldBrewCoffeeCards.title
              : ''
          }
        />
        <CoffeeCardList
          COFFEELIST_DATA={
            this.state.brewedCoffeeCards
              ? this.state.brewedCoffeeCards.coffees
              : []
          }
          coffeeCardsName={
            this.state.brewedCoffeeCards
              ? this.state.brewedCoffeeCards.title
              : ''
          }
        />
        <Footer />
      </div>
    );
  }
}

export default List;
