import React, { Component } from 'react';
import TopNav from '../../../components/Nav/Nav';
import './List.scss';

class List extends Component {
  render() {
    return (
      <div className="body-container">
        <TopNav />
        <main>
          <div className="bar2">
            <h2>콜드 브루 커피</h2>
            <span>
              <img
                src="https://image.istarbucks.co.kr/common/img/menu/logo_decaf.png"
                alt="coffee"
              />
              디카페인 에스프레소 샷 추가 기능 (일부 음료 제외)
            </span>
          </div>
          <div className="coldbrew">
            <ul className="coldbrew__line1">
              <li>
                <img
                  src="/images/minjaelee/img1.jpg"
                  alt="시그니처 더 블랙 콜드 브루"
                />
                <p>시그니처 더 블랙 콜드 브루</p>
              </li>
              <li>
                <img
                  src="/images/minjaelee/img2.jpg"
                  alt="아이스크림 블렌딩 콜드 브루"
                />
                <p>아이스크림 블렌딩 콜드 브루</p>
              </li>
              <li>
                <img
                  src="/images/minjaelee/img3.jpg"
                  alt="나이트로 바닐라 크림"
                />
                <p>나이트로 바닐라 크림</p>
              </li>
              <li>
                <img
                  src="/images/minjaelee/img4.jpg"
                  alt="나이트로 콜드 브루"
                />
                <p>나이트로 콜드 브루</p>
              </li>
            </ul>
            <ul className="coldbrew__line2">
              <li>
                <img src="/images/minjaelee/img5.jpg" alt="돌체 콜드 브루" />
                <p>돌체 콜드 브루</p>
              </li>
              <li>
                <img
                  src="/images/minjaelee/img6.jpg"
                  alt="바닐라 크림 콜드 브루"
                />
                <p>바닐라 크림 콜드 브루</p>
              </li>
              <li>
                <img
                  src="/images/minjaelee/img7.jpg"
                  alt="벨벳 다크 모카 나이트로"
                />
                <p>벨벳 다크 모카 나이트로</p>
              </li>
              <li>
                <img
                  src="/images/minjaelee/img8.jpg"
                  alt="제주 비자림 콜드 브루"
                />
                <p>제주 비자림 콜드 브루</p>
              </li>
            </ul>
            <ul className="coldbrew__line3">
              <li>
                <img src="/images/minjaelee/img9.jpg" alt="콜드 브루" />
                <p>콜드 브루</p>
              </li>
              <li>
                <img src="/images/minjaelee/img10.jpg" alt="콜드 브루 몰트" />
                <p>콜드 브루 몰트</p>
              </li>
              <li>
                <img
                  src="/images/minjaelee/img11.jpg"
                  alt="콜드 브루 오트 라떼"
                />
                <p>콜드 브루 오트 라떼</p>
              </li>
              <li>
                <img src="/images/minjaelee/img12.jpg" alt="콜드 브루 플로트" />
                <p>콜드 브루 플로트</p>
              </li>
            </ul>
          </div>
          <div className="bar3">
            <h2>브루드 커피</h2>
            <span>
              <img
                src="https://image.istarbucks.co.kr/common/img/menu/logo_decaf.png"
                alt="coffee"
              />
              디카페인 에스프레소 샷 추가 기능 (일부 음료 제외)
            </span>
          </div>
          <div className="brewed">
            <ul className="brewed__line">
              <li>
                <img src="/images/minjaelee/img13.jpg" alt="아이스 커피" />
                <p>아이스 커피</p>
              </li>
              <li>
                <img src="/images/minjaelee/img14.jpg" alt="오늘의 커피" />
                <p>오늘의 커피</p>
              </li>
            </ul>
          </div>
        </main>
      </div>
    );
  }
}

export default List;
