import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './CoffeeCard.scss';

class CoffeeCard extends Component {
  // goToDetailPage(name) {
  //   console.log(this.props.history);
  //   this.props.history.push(`/detail-sungjaelee/${name}`);
  //   // this.props.history.goBack();
  // }

  render() {
    const { name, img, onSelectedProduct } = this.props;

    return (
      <li className="CoffeeCard item">
        <Link
          className="imageContainer"
          to={`/detail-sungjaelee/${name}`}
          onClick={() => onSelectedProduct(name)}
          name={name}
          img={img}
        >
          <img src={img} alt={name} />
        </Link>
        {/* <div className="imageContainer">
          <img
            src={img}
            alt={name}
            onClick={() => {
              onSelectedProduct(name);
              this.goToDetailPage(name);
            }}
          />
        </div> */}
        <div className="nameContainer">
          <p className="name">{name}</p>
          <span>❤️</span>
          {/* <i className="likeBtn far fa-heart"></i> */}
        </div>
      </li>
    );
  }
}

// export default withRouter(CoffeeCard);
export default CoffeeCard;
