import React, { Component, createRef } from 'react';

import Review from './Review/Review';

import './Reviews.scss';

class Reviews extends Component {
  constructor() {
    super();
    this.myRef = createRef();
    this.state = {
      userId: 'codekim',
      reviewInput: '',
      reviews: [
        {
          id: 1,
          userId: 'coffee_lover',
          review: '너무 맛있어요!',
          isLiked: false,
        },
        {
          id: 2,
          userId: 'CHOCO7 ggg',
          review: '오늘도 화이팅 gggg',
          isLiked: false,
        },
        {
          id: 3,
          userId: 'legend_dev',
          review:
            '진짜 화이트 초콜릿 모카는 전설이다. 진짜 화이트 초콜릿 모카는 전설이다. 진짜 화이트 초콜릿 모카는 전설이다. 진짜 화이트 초콜릿 모카는 전설이다.',
          isLiked: false,
        },
      ],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleComment = this.handleComment.bind(this);
  }

  handleInputChange(e) {
    this.setState({ reviewInput: e.target.value });
  }

  handleSubmit(e) {
    const { userId, reviewInput, reviews } = this.state;
    this.setState({
      reviews: [
        ...reviews,
        {
          id: reviews.length ? reviews[reviews.length - 1].id + 1 : 1,
          userId,
          review: reviewInput,
          isLiked: false,
        },
      ],
      reviewInput: '',
    });
    e.preventDefault();
    this.myRef.current.blur();
  }

  handleComment(action, review, index) {
    let reviews = [...this.state.reviews];
    if (action === 'like') {
      const rev = { ...review };
      rev.isLiked = !rev.isLiked;
      reviews[index] = rev;
    }
    if (action === 'delete') {
      reviews = reviews.filter(r => r !== review);
    }
    this.setState({ reviews });
  }

  render() {
    const { reviewInput, reviews } = this.state;
    const { myRef, handleInputChange, handleSubmit, handleComment } = this;

    return (
      <div className="Reviews">
        <h4 className="reviewsHeader">리뷰</h4>

        {reviews.map((r, i) => {
          return <Review key={r.id} r={r} i={i} onComment={handleComment} />;
        })}

        <form id="newReviewForm" onSubmit={handleSubmit} autoComplete="off">
          <input // had trouble forwarding ref to <Input />
            id="newReview"
            type="text"
            placeholder="리뷰를 입력해주세요."
            ref={myRef}
            value={reviewInput}
            onChange={handleInputChange}
          />
        </form>
      </div>
    );
  }
}

export default Reviews;
