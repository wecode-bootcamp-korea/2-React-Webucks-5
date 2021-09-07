import React, { Component } from 'react';
import './Detail.scss';

class Footer extends Component {
  render() {
    return (
      <div className="detailPageBottom">
        <dt className="company">
          <span className="companyTitle">COMPANY</span>
          <dl>한눈에 보기</dl>
          <dl>스타벅스 사명</dl>
          <dl>스타벅스 소개</dl>
          <dl>국내 뉴스룸</dl>
          <dl>세계의 스타벅스</dl>
          <dl>글로벌 뉴스룸</dl>
        </dt>
        <dt className="corporateSales">
          <span className="corporateSalesTitle">CORPORATE SALES</span>
          <dl>단체 및 기업 구매 안내</dl>
        </dt>
        <dt className="partnership">
          <span className="partnershipTitle">PARTNERSHIP</span>
          <dl>신규 입점 제의</dl>
          <dl>협력 고객사 등록 신청</dl>
        </dt>
        <dt className="onlineCommunity">
          <span className="onlineCommunityTitle">ONLINE COMMUNITY</span>
          <dl>페이스북</dl>
          <dl>트위터</dl>
          <dl>유투브</dl>
          <dl>블로그</dl>
          <dl>인스타그램</dl>
        </dt>
        <dt className="recruit">
          <span className="recruitTitle">RECRUIT</span>
          <dl>채용소개</dl>
          <dl>채용 지원하기</dl>
        </dt>
        <dt className="webucks">
          <span className="webucksTitle">WEBUCKS</span>
        </dt>
      </div>
    );
  }
}

export default Footer;
