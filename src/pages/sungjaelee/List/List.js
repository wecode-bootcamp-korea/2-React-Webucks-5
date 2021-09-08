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
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch('http://localhost:3000/data/listData.json')
      .then(res => res.json())
      .then(json => {
        if (json.MESSAGE === 'SUCCESS') {
          this.setState({
            coldBrewData: json.COLD_BREW_LIST_DATA,
            brewedData: json.BREWED_LIST_DATA,
          });
        } else {
          alert('FAILED TO GET JSON');
        }
      });
  };

  toggleLike = (dataName, coffee) => {
    const coffeeList = [...this.state[dataName]];
    const cof = { ...coffee };
    const index = coffeeList.indexOf(coffee);
    cof.isLiked = !cof.isLiked;
    coffeeList[index] = cof;
    this.setState({ [dataName]: coffeeList });
  };

  render() {
    const { coldBrewData, brewedData } = this.state;
    const { pathname } = this.props.location;
    const { toggleLike } = this;

    return (
      <div className="List">
        <div className="container">
          <Nav pathname={pathname} />
          <CoffeeCardsContainer
            data={coldBrewData}
            dataName="coldBrewData"
            title="콜드 브루 커피"
            subtitle="디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)"
            toggleLike={toggleLike}
          />
          <CoffeeCardsContainer
            data={brewedData}
            dataName="brewedData"
            title="브루드 커피"
            subtitle="디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)"
            toggleLike={toggleLike}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default List;
