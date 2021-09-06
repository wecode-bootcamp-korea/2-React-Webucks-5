import React from 'react';
import './DetailImageBox.scss';

class DetailImageBox extends React.Component {
  render() {
    return (
      <div className="DetailImageBox">
        <img
          src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/06/[9200000003643]_20210623101238875.jpg"
          alt="아이스크림 블렌딩 콜드 브루"
          className="coffeeImage"
        />
      </div>
    );
  }
}

export default DetailImageBox;
