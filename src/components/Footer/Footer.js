import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <dl>
          <dt className="footer-menu">
            <Link to="#">COMPANY</Link>
          </dt>
          <dd className="footer-list">
            <Link to="#">한눈에 보기</Link>
            <Link to="#">스타벅스 사명</Link>
            <Link to="#">스타벅스 소개</Link>
            <Link to="#">국내 뉴스룸</Link>
            <Link to="#">세계의 스타벅스</Link>
            <Link to="#">글로벌 뉴스룸</Link>
          </dd>
        </dl>
        <dl>
          <dt className="footer-menu">
            <Link to="#">CORPORATE SALES</Link>
          </dt>
          <dd className="footer-list">
            <Link to="#">단체 및 기업 구매 안내</Link>
          </dd>
        </dl>
        <dl>
          <dt className="footer-menu">
            <Link to="#">PARTNERSHIP</Link>
          </dt>
          <dd className="footer-list">
            <Link to="#">신규 입점 제의</Link>
            <Link to="#">협력 고객사 등록 신청</Link>
          </dd>
        </dl>
        <dl>
          <dt className="footer-menu">
            <Link to="#">ONLINE COMMUNITY</Link>
          </dt>
          <dd className="footer-list">
            <Link to="#">페이스북</Link>
            <Link to="#">트위터</Link>
            <Link to="#">유튜브</Link>
            <Link to="#">블로그</Link>
            <Link to="#">인스타그램</Link>
          </dd>
        </dl>
        <dl>
          <dt className="footer-menu">
            <Link to="#">RECRUIT</Link>
          </dt>
          <dd className="footer-list">
            <Link to="#">채용 소개</Link>
            <Link to="#">채용 지원하기</Link>
          </dd>
        </dl>
        <dl>
          <dt className="footer-menu">
            <Link to="#">WEBUCKS</Link>
          </dt>
          <dd className="footer-list">
            <Link to="#"></Link>
          </dd>
        </dl>
      </footer>
    );
  }
}

export default Footer;
