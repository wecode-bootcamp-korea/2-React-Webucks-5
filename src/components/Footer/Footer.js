import React, { Component } from 'react';

import FOOTER_DATA from './footerData';

import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        {FOOTER_DATA.map(section => {
          const { id, header, options } = section;
          return (
            <div className="footerHeader" key={id}>
              <p>{header.toUpperCase()}</p>
              <div className="options">
                {options.map((option, i) => {
                  return <p key={i}>{option.title}</p>;
                })}
              </div>
            </div>
          );
        })}
      </footer>
    );
  }
}

export default Footer;
