import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./listCoffeeCard.scss";

class CoffeeCard extends Component {
  constructor() {
    super();
    this.state = {
      isHeartColorRed: false,
    };
  }

  changeHeartBtnColor = () => {
    const { isHeartColorRed } = this.state;
    this.setState({
      isHeartColorRed: !isHeartColorRed,
    });
  };

  render() {
    const { isHeartColorRed } = this.state;
    return (
      <div className="divTagWrapperCoffeeImgAndName">
        <Link to="/detail-minjaekim" className="aTagWrapperCoffeeImg">
          <img
            className="coffeeImg"
            key={this.props.coffeeListKey}
            src={this.props.coffeeImgUrl}
            alt={this.props.coffeeName}
          />
        </Link>
        <p className="coffeeName">
          {this.props.coffeeName}
          <FontAwesomeIcon
            icon={faHeart}
            className={isHeartColorRed ? "fa-heart changeColor" : "fa-heart"}
            onClick={this.changeHeartBtnColor}
          />
        </p>
      </div>
    );
  }
}

export default CoffeeCard;
