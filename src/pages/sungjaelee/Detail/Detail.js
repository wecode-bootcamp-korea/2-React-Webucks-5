import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartO } from '@fortawesome/free-regular-svg-icons';

import Nutrition from './Nutrition/Nutrition';
import Reviews from './Reviews/Reviews';
import Nav from '../../../components/Nav/Nav';
import Footer from '../../../components/Footer/Footer';

import LIST_COLDBREW_DATA from '../List/listColdBrewData';
// import LIST_BREWED_DATA from '../List/listBrewedData';

import './Detail.scss';

class Detail extends Component {
  constructor() {
    super();
    this.state = {
      isLiked: false,
    };
    this.handleProductLike = this.handleProductLike.bind(this);
  }

  handleProductLike() {
    //need to merge this with handleLike() in CoffeeCard.js (probably bring state up to Routes.js)
    this.setState({ isLiked: !this.state.isLiked });
  }

  render() {
    const { isLiked } = this.state;
    const { handleProductLike } = this;

    return (
      <div className="Detail">
        <div className="container">
          <Nav />
          <section className="productContainer">
            <header className="topCategoryContainer">
              <h2 className="categoryTitle">콜드 브루</h2>
              <p className="directory">
                홈 > MENU > 음료 > 에스프레소 > 나이트로 바닐라 크림
              </p>
            </header>
            <div className="mainInfoContainer">
              <div className="imageContainer">
                <img
                  src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002487]_20210426091745609.jpg"
                  alt="나이트로 바닐라 크림"
                />
              </div>
              <div className="detailsContainer">
                <div className="descriptionContainer">
                  <h3 className="title">
                    나이트로 바닐라 크림
                    <br />
                    <span className="english">Nitro Vanilla Cream</span>
                  </h3>
                  <FontAwesomeIcon
                    className={isLiked ? 'likeBtn fas' : 'likeBtn far'}
                    icon={isLiked ? faHeart : faHeartO}
                    size="lg"
                    onClick={handleProductLike}
                  />
                  <p className="description">
                    부드러운 목넘김의 나이트로 커피와 바닐라 크림의 매력을
                    한번에 느껴보세요!
                  </p>
                </div>
                <Nutrition data={LIST_COLDBREW_DATA} />
                <Reviews />
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Detail;
