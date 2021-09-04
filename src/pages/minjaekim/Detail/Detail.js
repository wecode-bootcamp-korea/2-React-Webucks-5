import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import TopNav from '../../../components/Nav/Nav'
import CommetBox from './CommentBox'
import Footer from "../components/footer";

import "./Detail.scss";

class Detail extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      heartColor: false,
      
    }
  }

  isActive = ()=>{
    this.setState({
      heartColor: !this.state.heartColor
    })
  } 
  
    render() {

      const {heartColor} = this.state
        return (
          <>
            <div className="Detail">
                < TopNav/>
                <header id="coffeeDetailHeader">
                    <h2 id="coffeeTypeName">콜드 브루</h2>
                    <p id="detailCoffeePagePath">홈 {">"}
                        MENU {">"}
                        음료 {">"}
                        에스프레스 {">"}
                        화이트 초콜릿 모카</p>
                </header>
                <main id="coffeeDetailMain">
                    <img
                        id="selectedCoffeeImg"
                        src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/03/[9200000003507]_20210322093414289.jpg"
                        alt="white chocholate coffee"/>
                    <aside id="mainAsideInfo">
                        <section id="coffeeNameAndDetailsInfoWrapper">
                            <header id="coffeeNameAndDetailHeader">
                                <div id="coffeeNameDiv">
                                    <h3 id="coffeeName">화이트 초콜릿 모카</h3>
                                    <h4 id="coffeeEngName">White Chocolate Mocha</h4>
                                </div>
                                <div id="heartImgDiv">
                                    <FontAwesomeIcon icon={faHeart}
                                        className={heartColor? "heartIcon fillHeartIconColor" : "heartIcon"}
                                        onClick={this.isActive}
                                    />
                                </div>
                            </header>
                            <p id="coffeeDetailsIntroduction">
                                달콤하고 부드러운 화이트 초콜릿 시럽과 에스프레소를 스팀 밀크와 섞어 휘핑크림으로 마무리한 음료로 달콤한 강렬한 에스프레소가 부드럽게 어우러진
                                커피
                            </p>
                        </section>
                        <section id="coffeeNutritionInfoWrapper">
                            <header id="coffeeNutritionHeader">
                                <h4 id="coffeeNutritionInfo">제품 영양 정보</h4>
                                <h4 id="coffeeNutritionUnit">Tall(톨) / 355ml(12 fl oz)</h4>
                            </header>
                            <article id="coffeeNutritionDetail">
                                <ul className="nutritionList leftSpace">
                                    <li className="nutritionContents">
                                        <p className="nutrient">1회 제공량 (kcal)</p>
                                        <p className="nutrientLevel">345</p>
                                    </li>
                                    <li className="nutritionContents">
                                        <p className="nutrient">포화지방 (g)</p>
                                        <p className="nutrientLevel">11</p>
                                    </li>
                                    <li className="nutritionContents">
                                        <p className="nutrient">단백질 (g)</p>
                                        <p className="nutrientLevel">11</p>
                                    </li>
                                </ul>
                                <ul className="nutritionList RightSpace">
                                    <li className="nutritionContents">
                                        <p className="nutrient">나트륨 (kcal)</p>
                                        <p className="nutrientLevel">150</p>
                                    </li>
                                    <li className="nutritionContents">
                                        <p className="nutrient">당류 (g)</p>
                                        <p className="nutrientLevel">35</p>
                                    </li>
                                    <li className="nutritionContents">
                                        <p className="nutrient">카페인 (mg)</p>
                                        <p className="nutrient">75</p>
                                    </li>
                                </ul>
                            </article>
                            <div id="coffeeAllergyStatus">
                                알레르기 유발 요인 : 우유
                            </div>
                        </section>
                        <section id="coffeeReviewWrapper">
                            <header id="coffeeReviewHeader">
                                <h4 id="reviewTitle">리뷰</h4>
                            </header>
                            <CommetBox/>
                        </section>
                    </aside>
                </main>
            </div> 
          <Footer/>
        </>
        )
    }
}

export default Detail;