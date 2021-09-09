import React, { Component } from 'react';
import TopNav from '../../../components/TopNav/TopNav';
import CoffeeType from './CoffeeType/CoffeeType';
import CoffeeCard from './CoffeCard/CoffeeCard';
import './List.scss';

class ListJaeWonKim extends Component {
  constructor() {
    super();
    this.state = {
      coldBrewCoffeeData: [],
      brewedCoffeeData: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/myCoffeePages.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          coldBrewCoffeeData: data.coldBrewCoffeePages,
          brewedCoffeeData: data.brewedCoffeePages,
        });
      });
  }

  render() {
    const { coldBrewCoffeeData, brewedCoffeeData } = this.state;
    return (
      <div className="List">
        <TopNav />
        <section>
          <CoffeeType title={'콜드 브루 커피'} />
          <dl className="section-cards">
            {coldBrewCoffeeData.map(data => {
              return (
                <CoffeeCard
                  key={data.id}
                  alt={data.alt}
                  src={data.src}
                  name={data.name}
                  link="/detail-jaewonkim"
                />
              );
            })}
          </dl>
          <CoffeeType title={'브루드 커피'} />
          <dl className="section-cards">
            {brewedCoffeeData.map(data => {
              return (
                <CoffeeCard
                  key={data.id}
                  alt={data.alt}
                  src={data.src}
                  name={data.name}
                  link="/detail-jaewonkim"
                />
              );
            })}
          </dl>
        </section>
      </div>
    );
  }
}

export default ListJaeWonKim;
