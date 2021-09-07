import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartO } from '@fortawesome/free-regular-svg-icons';

import Nutrition from './Nutrition/Nutrition';
import Reviews from './Reviews/Reviews';
import Nav from '../../../components/Nav/Nav';
import Footer from '../../../components/Footer/Footer';

import './Detail.scss';

class Detail extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { coffee, i, dataName } = this.props.location.state;
    const { isLiked, name, img } = coffee;

    return (
      <div className="Detail">
        <div className="container">
          <Nav />
          <section className="productContainer">
            <header className="topCategoryContainer">
              <h2 className="categoryTitle">
                {dataName === 'coldBrewData' ? '콜드 브루' : '브루드'}
              </h2>
              <p className="directory">
                홈 > MENU > 음료 > 에스프레소 > {name}
              </p>
            </header>
            <div className="mainInfoContainer">
              <div className="imageContainer">
                <img src={img} alt={name} />
              </div>
              <div className="detailsContainer">
                <div className="descriptionContainer">
                  <h3 className="title">
                    {name}
                    <br />
                    <span className="english">English name</span>
                  </h3>
                  <FontAwesomeIcon
                    className={isLiked ? 'likeBtn fas' : 'likeBtn far'}
                    icon={isLiked ? faHeart : faHeartO}
                    size="lg"
                    // onClick={() => handleLike(dataName, i)} //작동 안됨
                  />
                  <p className="description">
                    요즘 제일 잘 나가는 {name}의 매력을 한번에 느껴보세요!
                  </p>
                </div>
                <Nutrition coffee={coffee} />
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
