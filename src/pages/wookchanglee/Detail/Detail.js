import React from 'react';
import DetailHeader from './DetailHeader/DetailHeader';
import DetailImageBox from './DetailImageBox/DetailImageBox';
import CoffeeDescription from './CoffeeDescription/CoffeeDescription';
import NutritionFacts from './NutritionFacts/NutritionFacts';
import Reviews from './Reviews/Reviews';
import Nav from '../../../components/Nav/Nav';
import Footer from '../../../components/Footer/Footer';
import './Detail.scss';

class Detail extends React.Component {
  constructor() {
    super();
    this.state = {
      coffeeType: null,
      coffeeTitle: null,
      coffeeEnglishTitle: null,
      coffeeDescription: null,
      coffeeLike: null,
      coffeeImg: null,
      coffeeNutrition: null,
      coffeeReviews: null,
      tempUsername: '',
      tempReviewContent: '',
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/coffeeListData.json')
      .then(res => res.json())
      .then(res => {
        for (const coffeeCards in res) {
          for (const coffeeCard of res[coffeeCards].coffees) {
            if (coffeeCard.id === this.props.match.params.id) {
              this.setState({
                coffeeType: res[coffeeCards].title,
                coffeeTitle: coffeeCard.title,
                coffeeEnglishTitle: coffeeCard.englishTitle,
                coffeeDescription: coffeeCard.description,
                coffeeLike: coffeeCard.like,
                coffeeImg: coffeeCard.img,
                coffeeNutrition: coffeeCard.nutrition,
                coffeeReviews: coffeeCard.reviews,
              });
            }
          }
        }
      });
  }

  writeReview = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  deleteReview = id => {
    const reviewArr = [...this.state.coffeeReviews].filter(el => el.id !== id);
    this.setState({ coffeeReviews: reviewArr });
  };

  submitReview = e => {
    if (
      this.state.tempUsername.trim() !== '' &&
      this.state.tempReviewContent.trim() !== ''
    ) {
      const { coffeeReviews } = this.state;
      const newReview = {
        username: this.state.tempUsername,
        reviewContent: this.state.tempReviewContent,
        id:
          coffeeReviews.length > 0
            ? coffeeReviews[coffeeReviews.length - 1].id + 1
            : 1,
        like: false,
      };
      this.setState({
        coffeeReviews: [...coffeeReviews, newReview],
        tempReviewContent: '',
        tempUsername: '',
      });
    } else {
      alert('빈칸은 입력할 수 없습니다🥲');
    }
    e.preventDefault();
  };

  toggleHeart = () => {
    this.setState({ coffeeLike: !this.state.coffeeLike });
  };

  toggleHeartInReview = reviewId => {
    const reviewArr = [...this.state.coffeeReviews].map(review => {
      if (review.id === reviewId) {
        review.like = !review.like;
      }
      return review;
    });
    this.setState({ coffeeReviews: reviewArr });
  };

  render() {
    const {
      coffeeType,
      coffeeTitle,
      coffeeEnglishTitle,
      coffeeDescription,
      coffeeLike,
      coffeeImg,
      coffeeNutrition,
      coffeeReviews,
      tempUsername,
      tempReviewContent,
    } = this.state;
    return (
      <div className="Detail">
        <Nav />
        {coffeeReviews && (
          <section className="detailInner">
            <DetailHeader coffeeType={coffeeType} coffeeTitle={coffeeTitle} />
            <div className="detailContent">
              <div className="left">
                <DetailImageBox
                  coffeeImg={coffeeImg}
                  coffeeTitle={coffeeTitle}
                />
              </div>
              <div className="right">
                <CoffeeDescription
                  coffeeTitle={coffeeTitle}
                  coffeeEnglishTitle={coffeeEnglishTitle}
                  coffeeDescription={coffeeDescription}
                  coffeeLike={coffeeLike}
                  toggleHeart={this.toggleHeart}
                />
                <NutritionFacts coffeeNutrition={coffeeNutrition} />
                <Reviews
                  coffeeReviews={coffeeReviews}
                  writeReview={this.writeReview}
                  deleteReview={this.deleteReview}
                  submitReview={this.submitReview}
                  tempUsername={tempUsername}
                  tempReviewContent={tempReviewContent}
                  toggleHeartInReview={this.toggleHeartInReview}
                />
              </div>
            </div>
          </section>
        )}
        <Footer />
      </div>
    );
  }
}

export default Detail;
