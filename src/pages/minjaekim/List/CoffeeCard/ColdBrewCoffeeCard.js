import React, { Component } from 'react'
import LIST_DATA from '../ListColdBrewData'
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
      <div className="divWrapperAllImgAndName" key={this.props.id}>
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

class coldBrewCoffeeCard extends Component {
  render() {
    return (
      <section className="sectionContents coldBrewCoffeeCollections">
        {LIST_DATA.map(ListColdBrewData=> {
          return (
              <CoffeeWrapperImgAndName src={ListColdBrewData.img} alt={ListColdBrewData.name} key={ListColdBrewData.id}/>
            )
          })
        }
      </section>   
    )
  }
}

export default coldBrewCoffeeCard