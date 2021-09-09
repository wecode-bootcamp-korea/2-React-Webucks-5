import React, { Component } from 'react';
import CoffeeCard from './CoffeeCard/CoffeeCard';
import TopNav from '../../../components/Nav/Nav';
import SECOND_BAR from './BarData/SecondBar';
import THIRD_BAR from './BarData/SecondBar';
import './List.scss';

class List extends Component {
  constructor() {
    super();
    this.state = {
      coldbrewProducts: [],
      brewedProducts: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/CoffeeListData.json')
      .then(res => res.json())
      .then(res => {
        this.setState({ coldbrewProducts: res.coldbrewData });
        this.setState({ brewedProducts: res.brewData });
      });
  }

  render() {
    return (
      <div className="listContainer">
        <TopNav />
        <main>
          {SECOND_BAR.map(info => {
            const { id, name, img, alt, content } = info;
            return (
              <div className="secondBar" key={id}>
                <h2>{name}</h2>
                <span>
                  <img src={img} alt={alt} />
                  {content}
                </span>
              </div>
            );
          })}
          <div className="coldbrew">
            <ul className="coldbrewList">
              {this.state.coldbrewProducts.map(product => {
                const { id, img, name } = product;
                return <CoffeeCard key={id} img={img} name={name} />;
              })}
            </ul>
          </div>
          {THIRD_BAR.map(info => {
            const { id, name, img, alt, content } = info;
            return (
              <div className="thirdBar" key={id}>
                <h2>{name}</h2>
                <span>
                  <img src={img} alt={alt} />
                  {content}
                </span>
              </div>
            );
          })}
          <div className="brewed">
            <ul className="brewedList">
              {this.state.brewedProducts.map(product => {
                const { id, img, name } = product;
                return <CoffeeCard key={id} img={img} name={name} />;
              })}
            </ul>
          </div>
        </main>
      </div>
    );
  }
}

export default List;
