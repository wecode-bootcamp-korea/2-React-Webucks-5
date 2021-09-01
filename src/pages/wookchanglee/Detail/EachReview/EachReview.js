import React from 'react';
import './EachReview.scss';

class EachReview extends React.Component {
  render() {
    return (
      <div className="EachReview">
        <div className="core">
          <p className="username">{this.props.username}</p>
          <p className="string">{this.props.reviewContent}</p>
        </div>
        <div className="option">
          <div className="like">
            <i className="far fa-heart"></i>
          </div>
          <div className="delete">❌</div>
        </div>
      </div>
    );
  }
}
export default EachReview;
