import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./listCoffeeCard.scss";

class CoffeeCard extends Component {
  constructor() {
    super();
    this.state = {
      heartColor: false,
    };
  }
  isActive = () => {
    this.setState({
      heartColor: !this.state.heartColor,
    });
  };

  render() {
    const { heartColor } = this.state;
    return (
      <div className="divWrapperAllImgAndName">
        <Link to="/detail-minjaekim" className="divWrapperCoffeeImg">
          <img
            className="coffeeImg"
            key={this.props.coffeeListKey}
            src={this.props.imgUrl}
            alt={this.props.coffeeName}
          />
        </Link>
        <p className="coffeeName">
          {this.props.coffeeName}
          <FontAwesomeIcon
            icon={faHeart}
            className={
              heartColor ? "heartIcon fillHeartIconColor" : "heartIcon"
            }
            onClick={this.isActive}
          />
        </p>
      </div>
    );
  }
}

export default CoffeeCard;
