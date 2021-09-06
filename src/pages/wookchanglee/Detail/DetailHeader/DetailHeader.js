import React from 'react';
import './DetailHeader.scss';

class DetailHeader extends React.Component {
  render() {
    return (
      <div className="DetailHeader">
        <h1>콜드 브루</h1>
        <p className="menuHistory">
          홈 &gt; MENU &gt; 음료 &gt; 콜드 브루 &gt; 아이스크림 블렌딩 콜드브루
        </p>
      </div>
    );
  }
}

export default DetailHeader;
