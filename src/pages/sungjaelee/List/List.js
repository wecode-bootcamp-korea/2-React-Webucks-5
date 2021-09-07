import React, { Component } from 'react';

import CoffeeCardsContainer from './CoffeeCardsContainer/CoffeeCardsContainer';
import Nav from '../../../components/Nav/Nav';
import Footer from '../../../components/Footer/Footer';

import './List.scss';

class List extends Component {
  constructor() {
    super();
    this.state = {
      coldBrewData: [],
      brewedData: [],
    };
    this.handleLike = this.handleLike.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch('http://localhost:3000/data/myData.json')
      .then(res => res.json())
      .then(json => {
        if (json.MESSAGE === 'SUCCESS') {
          this.setState({
            coldBrewData: json.coldBrewData,
            brewedData: json.brewedData,
          });
        } else {
          alert('FAILED TO GET JSON');
        }
      });
  }

  handleLike(dataName, i) {
    const coffeeList = [...this.state[dataName]];
    const coffee = { ...coffeeList[i] };
    coffee.isLiked = !coffee.isLiked;
    coffeeList[i] = coffee;
    this.setState({ [dataName]: coffeeList });
  }

  render() {
    const { coldBrewData, brewedData } = this.state;
    const { pathname } = this.props.location;

    return (
      <div className="List">
        <div className="container">
          <Nav pathname={pathname} />
          <CoffeeCardsContainer
            data={coldBrewData}
            dataName="coldBrewData"
            title="콜드 브루 커피"
            subtitle="디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)"
            handleLike={this.handleLike}
          />
          <CoffeeCardsContainer
            data={brewedData}
            dataName="brewedData"
            title="브루드 커피"
            subtitle="디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)"
            handleLike={this.handleLike}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default List;
