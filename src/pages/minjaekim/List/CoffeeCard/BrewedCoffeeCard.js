import React, { Component } from 'react'
import LIST_DATA from '../ListBrewedData'
import { Link } from 'react-router-dom';

class CoffeeWrapperImgAndName extends Component  {
  render(){
    return (
      <div className="divWrapperAllImgAndName">
        <Link to="/detail-minjaekim"className="divWrapperCoffeeImg">
          <img className="coffeeImg" src={this.props.src} alt={this.props.alt} />
        </Link>
        <p className="coffeeName">{this.props.alt}</p>
      </div>
      );
    }
  };


class brewedCoffeeCard extends Component {
  render() {
    return (
      <section className="sectionContents brewedCoffeeCollections">
          {LIST_DATA.map(ListColdBrewData=> {
          return (
                  <CoffeeWrapperImgAndName src={ListColdBrewData.img} alt={ListColdBrewData.name}/>
            )
          })
        }
      </section>   
    )
  }
}

export default brewedCoffeeCard;

