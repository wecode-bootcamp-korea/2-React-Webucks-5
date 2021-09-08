import React from 'react';
import DetailHeader from './DetailHeader/DetailHeader';
import DetailContent from './DetailContent/DetailContent';
import Nav from '../../../components/Nav/Nav';
import Footer from '../../../components/Footer/Footer';
import './detail.scss';

class Detail extends React.Component {
  constructor() {
    super();
    this.state = {
      coffeeData: null,
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/coffeeListData.json')
      .then(res => res.json())
      .then(res => {
        for (const coffeeCards in res) {
          for (const coffeeCard of res[coffeeCards].coffees) {
            if (coffeeCard.id === this.props.match.params.id) {
              this.setState({ coffeeData: coffeeCard });
            }
          }
        }
      });
  }

  render() {
    return (
      <div className="Detail">
        <Nav />
        <section className="detailInner">
          <DetailHeader />
          <DetailContent
            coffeeData={this.state.coffeeData ? this.state.coffeeData : {}}
          />
        </section>
        <Footer />
      </div>
    );
  }
}

export default Detail;
