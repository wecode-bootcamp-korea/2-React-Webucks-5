import React from 'react';
import { Link } from 'react-router-dom';
import './CoffeeCard.scss';

class CoffeeCard extends React.Component {
  render() {
    const { id, title, img, like, toggleHeart } = this.props;
    return (
      <div className="CoffeeCard">
        <Link to={'/detail-wookchanglee/' + id}>
          <div className="wrapper">
            <img src={img} alt={title} />
          </div>
        </Link>
        <div className="title">
          <p>{title}</p>
          <i
            className={like ? 'fas fa-heart' : 'far fa-heart'}
            onClick={() => {
              toggleHeart(id);
            }}
          />
        </div>
      </div>
    );
  }
}

export default CoffeeCard;
