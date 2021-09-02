import React from 'react';
import FooterList from './FooterList/FooterList';
import footerListData from './footerListData';
import './footer.scss';

class Footer extends React.Component {
  constructor() {
    super();
    this.state = { footerListData };
  }

  render() {
    return (
      <footer className="Footer">
        <div className="inner">
          <div className="footer-list-wrap">
            {this.state.footerListData.map(el => {
              return <FooterList title={el.title} list={el.list} key={el.id} />;
            })}
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
