import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';

import TopNav from '../../../components/TopNav/TopNav';
import MidNav from './MidNav/MidNav';
import Review from './Review/Review';
import Footer from '../../../components/Footer/Footer';
import './Detail.scss';

library.add(faHeartRegular, faHeartSolid);

class DetailJaeWonKim extends Component {
  constructor() {
    super();
    this.state = {
      isLikedHeart: false,
      myReviews: [],
      newUserName: '(Unknown)',
      newReviewContent: '',
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/myReviews.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          myReviews: data.myReviews,
        });
      });
  }

  toggleHeart = () => {
    const { isLikedHeart } = this.state;
    this.setState({ isLikedHeart: !isLikedHeart });
  };

  render() {
    const { isLikedHeart } = this.state;

    return (
      <div className="Detail">
        <TopNav />
        <MidNav />

        <main>
          <aside>
            <h3>제주 비자림 콜드 브루</h3>
            <img
              alt="Jeju Forest Cold Brew"
              src="https://image.istarbucks.co.kr/upload/store/skuimg/2020/09/[9200000002672]_20200921171223958.jpg"
            />
          </aside>

          <section>
            <div className="section">
              <div className="section-info">
                <h3>
                  제주 비자림 콜드 브루
                  <FontAwesomeIcon
                    className="far fa-heart"
                    onClick={this.toggleHeart}
                    icon={faHeartRegular}
                  />
                  <FontAwesomeIcon
                    className={
                      isLikedHeart ? 'fas fa-heart active' : 'fas fa-heart'
                    }
                    onClick={this.toggleHeart}
                    icon={faHeartSolid}
                  />
                </h3>
                <h4>Jeju Forest Cold Brew</h4>
              </div>
              <div className="section-info">
                <p>
                  [제주지역 한정음료] 제주 천년의 숲 비자림을 연상시키는
                  <br />
                  음료로 제주에서 유기농 말차로 만든
                  <br />
                  파우더와 Cold Brew를 활용한 음료.
                </p>
              </div>
            </div>

            <div className="section">
              <div className="section-spec">
                <h5>제품 영양 정보</h5>
                <p>Grande(그란데) / 473ml (16 fl oz)</p>
              </div>

              <div className="section-spec">
                <div>
                  <dl>
                    <dt>1회 제공량 (kcal)</dt>
                    <dd>340</dd>
                  </dl>
                  <dl>
                    <dt>포화지방 (g)</dt>
                    <dd>8</dd>
                  </dl>
                  <dl>
                    <dt>단백질 (g)</dt>
                    <dd>10</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>나트륨 (mg)</dt>
                    <dd>115</dd>
                  </dl>
                  <dl>
                    <dt>당류 (g)</dt>
                    <dd>44</dd>
                  </dl>
                  <dl>
                    <dt>카페인 (mg)</dt>
                    <dd>105</dd>
                  </dl>
                </div>
              </div>

              <div className="section-spec">
                <p>알레르기 유발 요인 : 우유</p>
              </div>
            </div>

            <div className="section">
              <div className="section-review">
                <h5>리뷰</h5>
              </div>
              <div className="section-review">
                {this.state.myReviews.map(data => {
                  return (
                    <Review
                      key={data.id}
                      userName={data.userName}
                      reviewContent={data.reviewContent}
                    />
                  );
                })}
              </div>

              <form className="section-review">
                <input type="text" placeholder="리뷰를 입력해주세요." />
              </form>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    );
  }
}

export default DetailJaeWonKim;
