import React from 'react';
import DetailHeader from './DetailHeader/DetailHeader';
import DetailContent from './DetailContent/DetailContent';
import Nav from '../../../components/Nav/Nav';
import Footer from '../../../components/Footer/Footer';
import './detail.scss';

class Detail extends React.Component {
  render() {
    return (
      <div className="Detail">
        <Nav />
        <section className="detailInner">
          <DetailHeader />
          <DetailContent />
        </section>
        <Footer />
      </div>
    );
  }
}

export default Detail;
