import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartO } from '@fortawesome/free-regular-svg-icons';
// import {} from '@fortawesome/fontawesome-svg-core';

import Nav from '../../../components/Nav/Nav';

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
    this.setState({ isLiked: !this.state.isLiked });
  }

  getIconClasses() {
    const { isLiked } = this.state;
    let iconClasses = 'likeBtn ';
    iconClasses += isLiked ? 'fas' : 'far';
    return iconClasses;
  }

  render() {
    const { isLiked } = this.state;

    return (
      <div className="Detail">
        <div className="container">
          <Nav />
          {/* <!-- section --> */}
          <section className="productContainer">
            <header className="topCategoryContainer">
              <h2 className="categoryTitle">콜드 브루</h2>
              <p className="directory">
                홈 > MENU > 음료 > 에스프레소 > 나이트로 바닐라 크림
              </p>
            </header>
            {/* <!-- product info container  --> */}
            <div className="mainInfoContainer">
              {/* <!-- image container --> */}
              <div className="imageContainer">
                <img
                  src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002487]_20210426091745609.jpg"
                  alt="나이트로 바닐라 크림"
                />
              </div>
              {/* <!-- details container --> */}
              <div className="detailsContainer">
                <div className="descriptionContainer">
                  <h3 className="title">
                    나이트로 바닐라 크림
                    <br />
                    <span className="english">Nitro Vanilla Cream</span>
                  </h3>
                  {/* <i className="likeBtn far fa-heart fa-lg"></i> */}
                  <FontAwesomeIcon
                    className={this.getIconClasses()}
                    icon={isLiked ? faHeart : faHeartO}
                    size="lg"
                    onClick={this.handleProductLike}
                  />
                  <p className="description">
                    부드러운 목넘김의 나이트로 커피와 바닐라 크림의 매력을
                    한번에 느껴보세요!
                  </p>
                </div>
                <div className="nutritionContainer">
                  <div className="nutritionHeaderContainer">
                    <h4>제품 영양 정보</h4>
                    <p>Tall (톨) / 355ml (12 fl oz)</p>
                  </div>
                  <dl className="nutritionInfoContainer">
                    <div className="label">
                      <dt>1회 제공량 (kcal)</dt>
                      <dd>345</dd>
                    </div>
                    <div className="label">
                      <dt>포화지방 (g)</dt>
                      <dd>11</dd>
                    </div>
                    <div className="label">
                      <dt>단백질 (g)</dt>
                      <dd>11</dd>
                    </div>
                    <div className="label">
                      <dt>나트륨 (mg)</dt>
                      <dd>150</dd>
                    </div>
                    <div className="label">
                      <dt>당류 (g)</dt>
                      <dd>35</dd>
                    </div>
                    <div className="label">
                      <dt>카페인 (mg)</dt>
                      <dd>75</dd>
                    </div>
                  </dl>
                  <p className="allergyInfo">
                    알레르기 유발요인: <span>우유</span>
                  </p>
                </div>

                <div className="reviewsContainer">
                  <h4 className="reviewsHeader">리뷰</h4>
                  <div className="reviewContainer">
                    <span className="reviewerId">coffee_lover</span>
                    <p className="review">너무 맛있어요!</p>
                    <i className="commentLikeBtn far fa-heart"></i>
                  </div>
                  <div className="reviewContainer">
                    <span className="reviewerId">CHOCO7 ggg</span>
                    <p className="review">오늘도 화이팅 gggg</p>
                    <i className="commentLikeBtn far fa-heart"></i>
                  </div>
                  <div className="reviewContainer">
                    <span className="reviewerId">legend_dev</span>
                    <p className="review">
                      진짜 화이트 초콜릿 모카는 전설이다. 진짜 화이트 초콜릿
                      모카는 전설이다. 진짜 화이트 초콜릿 모카는 전설이다. 진짜
                      화이트 초콜릿 모카는 전설이다.
                    </p>
                    <i className="commentLikeBtn far fa-heart"></i>
                  </div>
                  {/* <!-- review form --> */}
                  <form id="newReviewForm" action="#" autoComplete="off">
                    <input
                      id="newReview"
                      type="text"
                      placeholder="리뷰를 입력해주세요."
                    />
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* <!-- footer --> */}
        <footer>
          <div className="footerHeader">
            <p>COMPANY</p>
            <div className="options">
              <p>한눈에 보기</p>
              <p>스타벅스 사명</p>
              <p>스타벅스 소개</p>
              <p>국내 뉴스룸</p>
              <p>세계의 스타벅스</p>
              <p>글로벌 뉴스룸</p>
            </div>
          </div>
          <div className="footerHeader">
            <p>CORPORATE SALES</p>
            <div className="options">
              <p>단체 및 기업 구매 안내</p>
            </div>
          </div>
          <div className="footerHeader">
            <p>PARTNERSHIP</p>
            <div className="options">
              <p>신규 입점 제의</p>
              <p>협력 고객사 등록 신청</p>
            </div>
          </div>
          <div className="footerHeader">
            <p>ONLINE COMMUNITY</p>
            <div className="options">
              <p>페이스북</p>
              <p>트위터</p>
              <p>유튜브</p>
              <p>블로그</p>
              <p>인스타그램</p>
            </div>
          </div>
          <div className="footerHeader">
            <p>RECRUIT</p>
            <div className="options">
              <p>채용 소개</p>
              <p>채용 지원하기</p>
            </div>
          </div>
          <div className="footerHeader">
            <p>WEBUCKS</p>
            <div className="options">
              <p></p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Detail;
