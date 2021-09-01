import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../../components/Nav/Nav';
import './List.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';

library.add(faHeartRegular, faHeartSolid);

class ListJaeWonKim extends Component {
  render() {
    return (
      <div className="List">
        <Nav />

        <section>
          <dl id="section1">
            <dt className="section-title">
              <h2>콜드 브루 커피</h2>
              <img
                alt="Decaf Coffee Icon"
                src="https://image.istarbucks.co.kr/common/img/menu/logo_decaf.png"
              />
              <p>디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</p>
            </dt>
          </dl>

          <dl id="section2">
            <dt className="section-items">
              <img
                alt="Signature The Black Cold Brew"
                src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/08/[9200000003661]_20210819094346334.jpg"
              />
              <h3>
                시그니처 더 블랙 콜드 브루
                <FontAwesomeIcon
                  className="far fa-heart"
                  icon={faHeartRegular}
                />
              </h3>
            </dt>
            <dt className="section-items">
              <img
                alt="Ice Cream Blending Cold Brew"
                src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/06/[9200000003643]_20210623101238875.jpg"
              />
              <h3>
                아이스크림 블렌딩 콜드 브루
                <FontAwesomeIcon
                  className="far fa-heart"
                  icon={faHeartRegular}
                />
              </h3>
            </dt>
            <dt className="section-items">
              <img
                alt="Nitro Vanilla Cream"
                src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002487]_20210426091745609.jpg"
              />
              <h3>
                나이트로 바닐라 크림
                <FontAwesomeIcon
                  className="far fa-heart"
                  icon={faHeartRegular}
                />
              </h3>
            </dt>
            <dt className="section-items">
              <img
                alt="Nitro Cold Brew"
                src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000479]_20210426091844065.jpg"
              />
              <h3>
                나이트로 콜드 브루
                <FontAwesomeIcon
                  className="far fa-heart"
                  icon={faHeartRegular}
                />
              </h3>
            </dt>
            <dt className="section-items">
              <img
                alt="Dolce Cold Brew"
                src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002081]_20210415133657016.jpg"
              />
              <h3>
                돌체 콜드 브루
                <FontAwesomeIcon
                  className="far fa-heart"
                  icon={faHeartRegular}
                />
              </h3>
            </dt>
            <dt className="section-items">
              <img
                alt="Vanilla Cream Cold Brew"
                src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000487]_20210430112319174.jpg"
              />
              <h3>
                바닐라 크림 콜드 브루
                <FontAwesomeIcon
                  className="far fa-heart"
                  icon={faHeartRegular}
                />
              </h3>
            </dt>
            <dt className="section-items">
              <img
                alt="Velvet Dark Mocha Nitro"
                src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/03/[9200000003509]_20210322093452556.jpg"
              />
              <h3>
                벨벳 다크 모카 나이트로
                <FontAwesomeIcon
                  className="far fa-heart"
                  icon={faHeartRegular}
                />
              </h3>
            </dt>
            <dt className="section-items">
              <Link to="/detail-jaewonkim">
                <img
                  alt="Jeju Forest Cold Brew"
                  src="https://image.istarbucks.co.kr/upload/store/skuimg/2020/09/[9200000002672]_20200921171223958.jpg"
                />
              </Link>
              <h3>
                <span>[인기!]</span> 제주 비자림 콜드 브루
                <FontAwesomeIcon
                  className="far fa-heart"
                  icon={faHeartRegular}
                />
              </h3>
            </dt>
            <dt className="section-items">
              <img
                alt="Just Cold Brew"
                src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000038]_20210430113202595.jpg"
              />
              <h3>
                콜드 브루
                <FontAwesomeIcon
                  className="far fa-heart"
                  icon={faHeartRegular}
                />
              </h3>
            </dt>
            <dt className="section-items">
              <img
                alt="Cold Brew Malt"
                src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/02/[9200000001636]_20210225093600541.jpg"
              />
              <h3>
                콜드 브루 몰트
                <FontAwesomeIcon
                  className="far fa-heart"
                  icon={faHeartRegular}
                />
              </h3>
            </dt>
            <dt className="section-items">
              <img
                alt="Cold Brew Oat Latte"
                src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000003285]_20210416154437226.jpg"
              />
              <h3>
                콜드 브루 오트 라떼
                <FontAwesomeIcon
                  className="far fa-heart"
                  icon={faHeartRegular}
                />
              </h3>
            </dt>
            <dt className="section-items">
              <img
                alt="Cold Brew Float"
                src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/02/[9200000001635]_20210225092236754.jpg"
              />
              <h3>
                콜드 브루 플로트
                <FontAwesomeIcon
                  className="far fa-heart"
                  icon={faHeartRegular}
                />
              </h3>
            </dt>
            <dt className="section-items">
              <img
                alt="French Apple Tarte Nitro"
                src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/03/[9200000003507]_20210322093414448.jpg"
              />
              <h3>
                프렌치 애플 타르트 나이트로
                <FontAwesomeIcon
                  className="far fa-heart"
                  icon={faHeartRegular}
                />
              </h3>
            </dt>
          </dl>

          <dl id="section1">
            <dt className="section-title">
              <h2>브루드 커피</h2>
              <img
                alt="Decaf Coffee Icon"
                src="https://image.istarbucks.co.kr/common/img/menu/logo_decaf.png"
              />
              <p>디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</p>
            </dt>
          </dl>

          <dl id="section2">
            <dt className="section-items">
              <img
                alt="Just Iced Coffee"
                src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[106509]_20210430111852999.jpg"
              />
              <h3>
                아이스 커피
                <FontAwesomeIcon
                  className="far fa-heart"
                  icon={faHeartRegular}
                />
              </h3>
            </dt>
            <dt className="section-items">
              <img
                alt="Today's Brewed Coffee"
                src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[2]_20210430111934246.jpg"
              />
              <h3>
                오늘의 커피
                <FontAwesomeIcon
                  className="far fa-heart"
                  icon={faHeartRegular}
                />
              </h3>
            </dt>
          </dl>
        </section>
      </div>
    );
  }
}

export default ListJaeWonKim;
