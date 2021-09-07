import "../../minjaekim/components/footer.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <footer className="Footer">
        <ul id="companyMenu">
          <h5 class="footerMenuTitle">COMPANY</h5>
          <li>
            <Link href="#">한눈에 보기</Link>
          </li>
          <li>
            <Link href="#">스타벅스 소개</Link>
          </li>
          <li>
            <Link href="#">스타벅스 사명</Link>
          </li>
          <li>
            <Link href="#">국내 뉴스룸</Link>
          </li>
          <li>
            <Link href="#">세계의 스타벅스</Link>
          </li>
          <li>
            <Link href="#">글로벌 뉴스룸</Link>
          </li>
        </ul>
        <ul id="corporateSales">
          <h5 class="footerMenuTitle">CORPORATE SALES</h5>
          <li>
            <Link href="#">단체 및 기업 구매 안내</Link>
          </li>
        </ul>
        <ul id="partnershipMenu">
          <h5 class="footerMenuTitle">PARTNERSHIP</h5>
          <li>
            <Link href="#">신규 입점 제의</Link>
          </li>
          <li>
            <Link href="#">협력 고객사 등록 신청</Link>
          </li>
        </ul>
        <ul id="onlineCommnityMenu">
          <h5 class="footerMenuTitle">ONLINE COMMUNITY</h5>
          <li>
            <Link href="#">페이스북</Link>
          </li>
          <li>
            <Link href="#">트위터</Link>
          </li>
          <li>
            <Link href="#">유튜브</Link>
          </li>
          <li>
            <Link href="#">블로그</Link>
          </li>
          <li>
            <Link href="#">인스타그램</Link>
          </li>
        </ul>
        <ul id="recuitMenu">
          <h5 class="footerMenuTitle">RECUIT</h5>
          <li>
            <Link href="#">채용 소개</Link>
          </li>
          <li>
            <Link href="#">채용 지원하기</Link>
          </li>
        </ul>
        <ul id="webuckMenu">
          <h5>WEBUCKS</h5>
        </ul>
      </footer>
    );
  }
}

export default Footer;
