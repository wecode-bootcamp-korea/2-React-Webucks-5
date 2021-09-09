import React from 'react';
import { Link } from 'react-router-dom';
import './FooterList.scss';

class FooterList extends React.Component {
  render() {
    const { title, list } = this.props;
    return (
      <div className="FooterList">
        <h3 className="title">{title}</h3>
        {list.map(el => {
          return (
            <Link to="#" key={el}>
              <p className="footerItem">{el}</p>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default FooterList;
