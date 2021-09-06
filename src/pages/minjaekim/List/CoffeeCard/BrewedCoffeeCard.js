import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import './listCoffeeCard.scss'

class CoffeeWrapperImgAndName extends Component  {
  constructor(props){
    super(props);
    this.state = {
      heartColor: false,
    }
  }

  isActive = ()=>{
    this.setState({
      heartColor: !this.state.heartColor
    })
  } 
  
  render(){
    const {heartColor} = this.state
    return (
      <div className="divWrapperAllImgAndName" key={this.props.key}>
        <Link to="/detail-minjaekim"className="divWrapperCoffeeImg">
          <img className="coffeeImg" src={this.props.src} alt={this.props.alt} />
        </Link>
        <p className="coffeeName">{this.props.alt}
        <FontAwesomeIcon icon={faHeart} className={heartColor? "heartIcon fillHeartIconColor" : "heartIcon"} onClick={this.isActive}/>
        </p>
      </div>
      );
    }
  };


class brewedCoffeeCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      products:[],
    }
  }

  componentDidMount(){
    fetch(`http://localhost:3000/data/ListBrewedData.json`, {
      method : 'GET',
    })
    .then(res => res.json())
    .then(data => 
      {
      this.setState({
        products: data.brewedCoffeeData
      })
    })
  }

  render() {
    return (
      <section className="sectionContents brewedCoffeeCollections">
          {this.state.products.map((product)=> {
          return (
                  <CoffeeWrapperImgAndName src={product.img} alt={product.name} key={product.id}/>
            )
          })
        }
      </section>   
    )
  }
}

export default brewedCoffeeCard;

