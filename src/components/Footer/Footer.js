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
            <section className="footerSection" key={id}>
              <header>{header.toUpperCase()}</header>
              <nav className="navOptions">
                {options.map(option => {
                  return <p key={option.title}>{option.title}</p>;
                })}
              </nav>
            </section>
          );
        })}
      </footer>
    );
  }
}

export default Footer;
