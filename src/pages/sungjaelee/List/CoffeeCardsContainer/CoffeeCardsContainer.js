import React, { Component } from 'react';

import CoffeeCard from './CoffeeCard/CoffeeCard';

import './CoffeeCardsContainer.scss';

class CoffeeCardsContainer extends Component {
  render() {
    const { data, title, subtitle } = this.props;

    return (
      <section className="CoffeeCardsContainer">
        <header className="headerContainer">
          <h2 className="title">{title}</h2>
          <p className="subtitle">{subtitle}</p>
        </header>
        <ul className="listContainer">
          {data.map(coffee => {
            const { name, img, id } = coffee;
            return <CoffeeCard name={name} img={img} key={id} />;
          })}
        </ul>
      </section>
    );
  }
}

export default CoffeeCardsContainer;