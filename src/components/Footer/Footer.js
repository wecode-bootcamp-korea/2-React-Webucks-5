import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      myFooterLinks: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/myFooterLinks.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          myFooterLinks: data.myFooterLinks,
        });
      });
  }

  render() {
    const { myFooterLinks } = this.state;
    return (
      <footer className="Footer">
        {myFooterLinks.map(data => {
          return (
            <dl>
              <dt className="footer-menu">
                <Link to={data.titleLink}>{data.footerTitle}</Link>
              </dt>
              <dd className="footer-list">
                {data.footerPages.map(data => {
                  return (
                    <Link key={data.id} to={data.pageLink}>
                      {data.pageName}
                    </Link>
                  );
                })}
              </dd>
            </dl>
          );
        })}
      </footer>
    );
  }
}

export default Footer;
