import React, { Component } from 'react';
import './Review.scss';

class Review extends Component {
  render() {
    return (
      <dl className="Review">
        <dt>{this.props.userName}</dt>
        <dd>{this.props.reviewContent}</dd>
      </dl>
    );
  }
}

export default Review;
