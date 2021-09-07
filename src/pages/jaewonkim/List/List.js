import React, { Component } from 'react';
import Nav from '../../../components/Nav/Nav';
import CoffeeCard from './CoffeCard/CoffeeCard';
import './List.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';

library.add(faHeartRegular, faHeartSolid);

class ListJaeWonKim extends Component {
  constructor() {
    super();
    this.state = {
      coldBrewCoffeeData: [],
      brewedCoffeeData: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/myCoffeeCards.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          coldBrewCoffeeData: data.coldBrewCoffeeCards,
          brewedCoffeeData: data.brewedCoffeeCards,
        });
      });
  }

  render() {
    return (
      <div className="List">
        <Nav />

        <section>
          <dl id="section1">
            <dt className="section-title">
              <h2>콜드 브루 커피</h2>
              <img
                alt="Decaf Coffee Icon"
                src="https://image.istarbucks.co.kr/common/img/menu/logo_decaf.png"
              />
              <p>디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</p>
            </dt>
          </dl>

          <dl id="section2">
            {this.state.coldBrewCoffeeData.map(data => {
              return (
                <CoffeeCard
                  key={data.id}
                  alt={data.alt}
                  src={data.src}
                  text={data.text}
                  link={data.link}
                />
              );
            })}
          </dl>

          <dl id="section1">
            <dt className="section-title">
              <h2>브루드 커피</h2>
              <img
                alt="Decaf Coffee Icon"
                src="https://image.istarbucks.co.kr/common/img/menu/logo_decaf.png"
              />
              <p>디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</p>
            </dt>
          </dl>

          <dl id="section2">
            {this.state.brewedCoffeeData.map(data => {
              return (
                <CoffeeCard
                  key={data.id}
                  alt={data.alt}
                  src={data.src}
                  text={data.text}
                  link={data.link}
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
