import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faRedHeart } from '@fortawesome/free-solid-svg-icons';
import Review from './Review';
import Footer from './Footer';
import TopNav from '../../../components/Nav/Nav';
import './Detail.scss';

class Detail extends Component {
  constructor() {
    super();
    this.state = {
      isLike: false,
    };
  }

  handleClickAndChangeHeartColor = () => {
    const { isLike } = this.state;
    this.setState({ isLike: !isLike });
    isLike ? this.setState({ faRedHeart }) : this.setState({ faHeart });
  };

  render() {
    return (
      <div className="detailContainer">
        <TopNav />
        <main>
          <div className="detailPageTop">
            <h1>콜드 브루</h1>
            <span>홈> MENU > 음료 > 콜드브루 > 제주 비자림 콜드 브루</span>
          </div>
          <div className="detailListPage">
            <div className="detailPageLeft">
              <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2020/09/[9200000002672]_20200921171223898.jpg" />
            </div>
            <div className="detailPageRight">
              <section className="detailTitle">
                <span className="detailTitleName">
                  제주 비자림 콜드 브루
                  <p>Jeju Forest Cold Brew</p>
                </span>
                <FontAwesomeIcon
                  icon={this.state.isLike ? faRedHeart : faHeart}
                  className={this.state.isLike ? 'redHeart' : 'blackHeart'}
                  onClick={this.handleClickAndChangeHeartColor}
                />
              </section>
              <div className="detailSubTitle">
                <p>
                  <span className="title1">
                    제주지역 한정음료 제주 천년의 숲 비자림을 연상시키는 음료로
                  </span>
                  <span className="title2">
                    제주에서 유기농 말차로 만든 파우더와 Cold Brew를 활용한 음료
                  </span>
                </p>
              </div>
              <div className="detailNutritionTitle">
                <span>제품 영양 정보</span>
                <span>Grande(그란데) / 473ml (16 fl oz)</span>
              </div>
              <div className="detailNutritionContent">
                <div className="nutritionLeft">
                  <div>
                    <dd>1회 제공량(kcal)</dd>
                    <dt>340</dt>
                  </div>
                  <div>
                    <dd>포화지방 (g)</dd>
                    <dt>8</dt>
                  </div>
                  <div>
                    <dd>단백질 (g)</dd>
                    <dt>10</dt>
                  </div>
                </div>
                <div className="nutritionRight">
                  <div>
                    우유
                    <dd>나트륨 (mg)</dd>
                    <dt>10</dt>
                  </div>
                  <div>
                    <dd>당류 (g)</dd>
                    <dt>35</dt>
                  </div>
                  <div>
                    <dd>카페인 (mg)</dd>
                    <dt>75</dt>
                  </div>
                </div>
              </div>
              <div className="allergyInfo">알레르기 유발 요인: 우유</div>
              <Review />
            </div>
          </div>
          <Footer />
        </main>
      </div>
    );
  }
}

export default Detail;
