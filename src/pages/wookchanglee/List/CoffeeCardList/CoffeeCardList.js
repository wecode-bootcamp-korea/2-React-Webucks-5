import React from 'react';
import CoffeeCard from '../CoffeeCard/CoffeeCard';
import './CoffeeCardList.scss';

class CoffeeCardList extends React.Component {
  render() {
    const { coffeeCardsName, COFFEELIST_DATA, toggleHeart } = this.props;
    return (
      <section className="CoffeeCardList">
        <div className="coffeeListHeader">
          <h2 className="title">{coffeeCardsName}</h2>
          <img
            className="coffeeLogoImg"
            src="//image.istarbucks.co.kr/common/img/menu/logo_decaf.png"
            alt="coffee logo"
          />
          <p className="content">
            디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
          </p>
        </div>

        <div className="coffeeListBody">
          {COFFEELIST_DATA.map(coffee => {
            return (
              <CoffeeCard
                img={coffee.img}
                title={coffee.title}
                key={coffee.id}
                id={coffee.id}
                like={coffee.like}
                toggleHeart={toggleHeart}
              />
            );
          })}
        </div>
      </section>
    );
  }
}

export default CoffeeCardList;
