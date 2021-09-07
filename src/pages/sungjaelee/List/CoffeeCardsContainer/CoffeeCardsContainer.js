import React, { Component } from 'react';

import CoffeeCard from './CoffeeCard/CoffeeCard';

import './CoffeeCardsContainer.scss';

class CoffeeCardsContainer extends Component {
  render() {
    const { data, dataName, title, subtitle, handleLike } = this.props;

    return (
      <section className="CoffeeCardsContainer">
        <header className="headerContainer">
          <h2 className="title">{title}</h2>
          <p className="subtitle">{subtitle}</p>
        </header>
        <ul className="listContainer">
          {data.map((coffee, i) => {
            return (
              <CoffeeCard
                key={coffee.id}
                coffee={coffee}
                i={i}
                dataName={dataName}
                handleLike={handleLike}
              />
            );
          })}
        </ul>
      </section>
    );
  }
}

export default CoffeeCardsContainer;
