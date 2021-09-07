import React, { Component } from "react";
import TopNav from "../../../components/Nav/Nav";
import CoffeeCard from "./CoffeeCard/CoffeeCard";
import "./List.scss";

class ListPage extends Component {
  constructor() {
    super();
    this.state = {
      coldBrewProducts: [],
      brewedProducts: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/coffeeListData.json")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ coldBrewProducts: data.COLD_BREW_COFFEE_DATA });
        this.setState({ brewedProducts: data.BREWED_COFFEE_LIST });
      });
  }

  render() {
    return (
      <div className="List">
        <TopNav />
        <main className="coffeeListPageMain">
          <div className="mainCategoryWrapper coldBrewCoffeeSection">
            <header className="categoryHeader coldBrewCoffeeSectionHead">
              <h3 className="coffeeTypeName">콜드 브루 커피</h3>
              <h4 className="coffeeDetailDescription">
                ☕ 디카페인 에스프레소 샷 추가 기능 (일부 음료 제외)
              </h4>
            </header>
            <section className="sectionContents coldBrewCoffeeCollections">
              {this.state.coldBrewProducts.map((product) => {
                return (
                  <CoffeeCard
                    coffeeImgUrl={product.img}
                    coffeeName={product.name}
                    CoffeeListKey={product.id}
                  />
                );
              })}
            </section>
          </div>
          <div className="mainCategoryWrapper brewedCoffeeSection">
            <header className="categoryHeader brewedCoffeeSectionHead">
              <h3 className="coffeeTypeName">브루드 커피</h3>
              <h4 className="coffeeDetailDescription">
                ☕ 디카페인 에스프레소 샷 추가 기능 (일부 음료 제외)
              </h4>
            </header>
            <section className="sectionContents brewedCoffeeCollections">
              {this.state.brewedProducts.map((product) => {
                return (
                  <CoffeeCard
                    coffeeImgUrl={product.img}
                    coffeeName={product.name}
                    CoffeeListKey={product.id}
                  />
                );
              })}
            </section>
          </div>
        </main>
      </div>
    );
  }
}

export default ListPage;
