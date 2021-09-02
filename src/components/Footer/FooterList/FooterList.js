import React from 'react';
import { Link } from 'react-router-dom';
import './footerList.scss';

class FooterList extends React.Component {
  render() {
    return (
      <div className="FooterList">
        <h3 className="footer-list__title">{this.props.title}</h3>
        {this.props.list.map((el, idx) => {
          return (
            <Link to="#" key={el}>
              <p className="footer-list__item">{el}</p>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default FooterList;
