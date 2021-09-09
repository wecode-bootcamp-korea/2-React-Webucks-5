import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartO } from '@fortawesome/free-regular-svg-icons';
import Nutrition from './Nutrition/Nutrition';
import Reviews from './Reviews/Reviews';
import Nav from '../../../components/Nav/Nav';
import Footer from '../../../components/Footer/Footer';
import './Detail.scss';

class Detail extends Component {
  constructor() {
    super();
    this.state = {
      nutritionFacts: {},
      reviews: {},
    };
  }

  componentDidMount() {
    this.fetchData();
    window.scrollTo(0, 0);
  }

  fetchData = () => {
    const { dataName, index } = this.props.location.state;
    fetch('http://localhost:3000/data/detailData.json')
      .then(res => res.json())
      .then(json => {
        this.setState({
          nutritionFacts:
            dataName === 'coldBrewData'
              ? json.COLD_BREW_DETAIL_DATA[index].nutrition
              : json.BREWED_DETAIL_DATA[index].nutrition,
          reviews:
            dataName === 'coldBrewData'
              ? json.COLD_BREW_DETAIL_DATA[index].reviews
              : json.BREWED_DETAIL_DATA[index].reviews,
        }); // repetitive
      });
  };

  submitReview = reviews => {
    this.setState({ reviews });
  };

  likeReview = review => {
    const reviews = [...this.state.reviews];
    const rev = { ...review };
    const index = reviews.indexOf(review); // look into why .indexOf(rev) results to -1
    rev.isLiked = !rev.isLiked;
    reviews[index] = rev;
    this.setState({ reviews });
  };

  deleteReview = review => {
    let reviews = [...this.state.reviews];
    reviews = reviews.filter(r => r !== review);
    this.setState({ reviews });
  };

  render() {
    const { nutritionFacts, reviews } = this.state;
    const { labels, allergen } = nutritionFacts;
    const { coffee, dataName } = this.props.location.state;
    const { isLiked, name, img } = coffee;

    return (
      <div className="Detail">
        <div className="container">
          <Nav />
          <section className="productContainer">
            <header className="topCategoryContainer">
              <h2 className="categoryTitle">
                {dataName === 'coldBrewData' ? '콜드 브루' : '브루드'}
              </h2>
              <p className="directory">
                홈 &gt; MENU &gt; 음료 &gt; 에스프레소 &gt; {name}
              </p>
            </header>
            <div className="mainInfoContainer">
              <div className="imageContainer">
                <img src={img} alt={name} />
              </div>
              <div className="detailsContainer">
                <div className="descriptionContainer">
                  <h3 className="title">
                    {name}
                    <br />
                    <span className="english">English name</span>
                  </h3>
                  <FontAwesomeIcon
                    className={isLiked ? 'likeBtn fas' : 'likeBtn far'}
                    icon={isLiked ? faHeart : faHeartO}
                    size="lg"
                    // onClick={() => toggleLike(dataName, i)} //아직 구현하지 못했습니다. CoffeeCard에서 Detail로 함수를 제대로 전달하는 방법을 찾고 있는 중입니다.
                  />
                  <p className="description">
                    요즘 제일 잘 나가는 {name}의 매력을 한번에 느껴보세요!
                  </p>
                </div>
                {labels && (
                  <>
                    <Nutrition labels={labels} allergen={allergen} />
                    <Reviews
                      reviews={reviews}
                      submitReview={this.submitReview}
                      likeReview={this.likeReview}
                      deleteReview={this.deleteReview}
                    />
                  </>
                )}
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Detail;
