import React from 'react';
import './Review.scss';

class Review extends React.Component {
  state = { isHeartFilled: false };
  render() {
    return (
      <div className="Review">
        <div className="content">
          <p className="username">{this.props.username}</p>
          <p className="comment">{this.props.reviewContent}</p>
        </div>
        <div className="option">
          <div className="like">
            <i
              className={
                this.state.isHeartFilled ? 'fas fa-heart' : 'far fa-heart'
              }
              onClick={() =>
                this.setState({
                  isHeartFilled: !this.state.isHeartFilled,
                })
              }
            ></i>
          </div>
          <div
            className="delete"
            onClick={() => this.props.deleteReview(this.props.id)}
          >
            ❌
          </div>
        </div>
      </div>
    );
  }
}
export default Review;
