import React, { Component } from 'react';
import CoffeeCard from './CoffeeCard/CoffeeCard';
import './CoffeeCardsContainer.scss';

class CoffeeCardsContainer extends Component {
  render() {
    const { data, dataName, title, subtitle, toggleLike } = this.props;

    return (
      <section className="CoffeeCardsContainer">
        <header className="headerContainer">
          <h2 className="title">{title}</h2>
          <p className="subtitle">{subtitle}</p>
        </header>
        <ul className="listContainer">
          {data.map((coffee, index) => {
            return (
              <CoffeeCard
                key={coffee.id}
                coffee={coffee}
                dataName={dataName}
                index={index}
                toggleLike={toggleLike}
              />
            );
          })}
        </ul>
      </section>
    );
  }
}

export default CoffeeCardsContainer;
