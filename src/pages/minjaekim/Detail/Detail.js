import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faBackspace } from '@fortawesome/free-solid-svg-icons'
import TopNav from '../../../components/Nav/Nav'
import Footer from "../components/footer";
import "./Detail.scss";

class Detail extends React.Component {
    render() {
        return (
          <> 
            <div class = "Detail" > 
              <TopNav />
              <header id="coffeeDetailHeader">
                  <h2 id="coffeeTypeName">콜드 브루</h2>
                  <p id="detailCoffeePagePath">홈 {">"} MENU {">"} 음료 {">"} 에스프레스 {">"} 화이트 초콜릿 모카</p>
              </header>
              <main id="coffeeDetailMain">
                <img id="selectedCoffeeImg" src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/03/[9200000003507]_20210322093414289.jpg" alt="white chocholate coffee"/>
                <aside id="mainAsideInfo">
                  <section id="coffeeNameAndDetailsInfoWrapper">
                    <header id="coffeeNameAndDetailHeader">
                      <div id="coffeeNameDiv">
                        <h3 id="coffeeName">화이트 초콜릿 모카</h3>
                        <h4 id="coffeeEngName">White Chocolate Mocha</h4>
                      </div>
                      <div id="heartImgDiv">
                        <FontAwesomeIcon icon={faHeart} />
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
                      <ul class="nutritionList leftSpace">
                        <li class="nutritionContents">
                          <p class="nutrient">1회 제공량 (kcal)</p>
                          <p class="nutrientLevel">345</p>
                        </li>
                        <li class="nutritionContents">
                          <p class="nutrient">포화지방 (g)</p>
                          <p class="nutrientLevel">11</p>
                        </li>
                        <li class="nutritionContents">
                          <p class="nutrient">단백질 (g)</p>
                          <p class="nutrientLevel">11</p>
                        </li>
                      </ul>
                      <ul class="nutritionList RightSpace">
                        <li class="nutritionContents">
                          <p class="nutrient">나트륨 (kcal)</p>
                          <p class="nutrientLevel">150</p>
                        </li>
                        <li class="nutritionContents">
                            <p class="nutrient">당류 (g)</p>
                            <p class="nutrientLevel">35</p>
                        </li>
                        <li class="nutritionContents">
                            <p class="nutrient">카페인 (mg)</p>
                            <p class="nutrient">75</p>
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
                    <ul id="reviewStatus">
                      <li class="reviewList">
                        <span class="userId">coffee_lover</span>
                        <span class="reviewContents">너무 맛있어요!</span>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        <FontAwesomeIcon icon={faBackspace} />
                      </li>
                      <li class="reviewList">
                        <span class="userId">CHOCO7</span>
                        <span class="reviewContents">오늘도 화이트 초콜릿 모카를 마시러 갑니다.</span>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        <FontAwesomeIcon icon={faBackspace} />
                      </li>
                      <li class="reviewList">
                        <span class="userId">legend_dev</span>
                        <span class="reviewContents">진짜 화이트 초콜릿 모카는 전설이다. 진짜 화이트 초콜릿 모카는 전설이다. 진짜 화이트 초콜릿 모카는 전설이다</span>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        <FontAwesomeIcon icon={faBackspace} />
                      </li>
                    </ul>
                    <form id="reviewInputBox">
                      <input type="text" id="userInputIdBox" placeholder="작성자 명" required="required"/>
                      <input type="text" id="contentsInputBox" placeholder="리뷰를 입력하세요"/>
                    </form>
                  </section>
                </aside>
              </main>
            </div>
            <Footer />
          </>
        )
    }
}

export default Detail;