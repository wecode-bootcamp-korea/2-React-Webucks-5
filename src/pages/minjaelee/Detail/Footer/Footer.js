import React, { Component } from 'react';
import FOOTER_DATA from './FooterData';
import '../Detail.scss';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        {FOOTER_DATA.map(info => {
          const { id, listTitle, list } = info;
          return (
            <ul className="footerList" key={id}>
              <h1 className="listTitle">{listTitle}</h1>
              {list &&
                list.map(list => {
                  const { name } = list;
                  return <li className="listName">{name}</li>;
                })}
            </ul>
          );
        })}
      </footer>
    );
  }
}

export default Footer;
