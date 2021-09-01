import React ,{Component} from "react";
import TopNav from '../../../components/Nav/Nav'
import ColdBrewCoffeeCard from './CoffeeCard/ColdBrewCoffeeCard'
import BrewedCoffeeCard from './CoffeeCard/BrewedCoffeeCard'
import "./List.scss";


class ListPage extends React.Component {
  render() {
    return (
      <div className="List">
        <TopNav />
          <main className="coffeeListPageMain">
            <div className="mainCategoryWrapper coldBrewCoffeeSection">
                <header className="categoryHeader coldBrewCoffeeSectionHead">
                    <h3 className="coffeeTypeName">콜드 브루 커피</h3>
                    <h4 className="coffeeDetailDescription">
                        ☕ 디카페인 에스프레소 샷 추가 기능 (일부 음료 제외)</h4>
                </header>
                <ColdBrewCoffeeCard />
            </div>
            <div className="mainCategoryWrapper brewedCoffeeSection">
                <header className="categoryHeader brewedCoffeeSectionHead">
                    <h3 className="coffeeTypeName">브루드 커피</h3>
                    <h4 className="coffeeDetailDescription">
                        ☕ 디카페인 에스프레소 샷 추가 기능 (일부 음료 제외)</h4>
                </header>
                <BrewedCoffeeCard />
            </div>
        </main>
      </div>  
    );
  }
}

export default ListPage;
