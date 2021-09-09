import React from 'react';
import './Review.scss';

class Review extends React.Component {
  render() {
    const {
      username,
      reviewContent,
      deleteReview,
      id,
      toggleHeartInReview,
      like,
    } = this.props;
    return (
      <div className="Review">
        <div className="content">
          <p className="username">{username}</p>
          <p className="comment">{reviewContent}</p>
        </div>
        <div className="option">
          <div className="like">
            <i
              className={like ? 'fas fa-heart' : 'far fa-heart'}
              onClick={() => {
                toggleHeartInReview(id);
              }}
            />
          </div>
          <div className="delete" onClick={() => deleteReview(id)}>
            ❌
          </div>
        </div>
      </div>
    );
  }
}
export default Review;
