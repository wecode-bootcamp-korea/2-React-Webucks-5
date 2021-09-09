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
      coldBrewTitle: '',
      brewedTitle: '',
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/coffeeListData.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          coldBrewCoffeeCards: res.coldBrewCoffeeCards.coffees,
          brewedCoffeeCards: res.brewedCoffeeCards.coffees,
          coldBrewTitle: res.coldBrewCoffeeCards.title,
          brewedTitle: res.brewedCoffeeCards.title,
        });
      });
  }

  toggleHeart = id => {
    if (id.includes('coldBrew')) {
      const coffeeArr = [...this.state.coldBrewCoffeeCards].map(coffee => {
        if (id === coffee.id) {
          coffee.like = !coffee.like;
        }
        return coffee;
      });
      this.setState({ coldBrewCoffeeCards: coffeeArr });
    } else {
      const coffeeArr = [...this.state.brewedCoffeeCards].map(coffee => {
        if (id === coffee.id) {
          coffee.like = !coffee.like;
        }
        return coffee;
      });
      this.setState({ brewedCoffeeCards: coffeeArr });
    }
  };

  render() {
    return (
      <div className="List">
        <Nav />
        {this.state.coldBrewCoffeeCards ? (
          <>
            <CoffeeCardList
              COFFEELIST_DATA={this.state.coldBrewCoffeeCards}
              coffeeCardsName={this.state.coldBrewTitle}
              toggleHeart={this.toggleHeart}
            />
            <CoffeeCardList
              COFFEELIST_DATA={this.state.brewedCoffeeCards}
              coffeeCardsName={this.state.brewedTitle}
              toggleHeart={this.toggleHeart}
            />
          </>
        ) : null}

        <Footer />
      </div>
    );
  }
}

export default List;
