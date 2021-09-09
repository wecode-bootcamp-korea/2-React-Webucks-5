import React from 'react';
import footerListData from './footerListData';
import FooterList from './FooterList/FooterList';
import './Footer.scss';

class Footer extends React.Component {
  constructor() {
    super();
    this.state = { footerListData };
  }

  render() {
    const { footerListData } = this.state;
    return (
      <footer className="Footer">
        <div className="footerInner">
          <div className="footerList">
            {footerListData.map(el => {
              return <FooterList title={el.title} list={el.list} key={el.id} />;
            })}
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
