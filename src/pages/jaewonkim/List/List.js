import React, { Component } from 'react';
import Nav from '../../../components/Nav/Nav';
import './List.scss';

// 합의한 공용 Mock Data와 map 함수를 활용하여 CoffeeCard 컴포넌트로 기존 코드를 대체
import CoffeeCard from './CoffeCard/CoffeeCard';
import LIST_COLDBREW_DATA from './ListColdBrewData';
import LIST_BREWED_DATA from './ListBrewedData';

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
            {LIST_COLDBREW_DATA.map(listColdBrewData => {
              return (
                <CoffeeCard
                  key={listColdBrewData.id}
                  alt={listColdBrewData.alt}
                  src={listColdBrewData.src}
                  text={listColdBrewData.text}
                  link={listColdBrewData.link}
                />
              );
            })}
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
            {LIST_BREWED_DATA.map(listBrewedData => {
              return (
                <CoffeeCard
                  key={listBrewedData.id}
                  alt={listBrewedData.alt}
                  src={listBrewedData.src}
                  text={listBrewedData.text}
                  link={listBrewedData.link}
                />
              );
            })}
          </dl>
        </section>
      </div>
    );
  }
}

export default ListJaeWonKim;
