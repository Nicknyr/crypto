import React, { Component } from 'react';
import axios from "axios";
import Chart from './d3-2';
import Header from './Header';
import Footer from './Footer';

class CoinInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      coinData: []
    }
  }

  // Adding https://cors-anywhere.herokuapp.com/ to API URL fixed the CORS error
  //https://www.cryptocompare.com/api/data/coinsnapshotfullbyid/?id=1182
  componentDidMount() {
    const coinID = 1182;

    axios.get(`https://cors-anywhere.herokuapp.com/https://www.cryptocompare.com/api/data/coinsnapshotfullbyid/?id=` + coinID)
    .then(res => {
        const info = res.data.Data.General;
        this.setState({ coinData: info });
    })
    .catch(error => {
      console.log(error);
    });
  }


  render() {
    const data = this.state.coinData;
    console.log(data);

    if(data == null) return null;

    return (
        <div>
          <Header />
          <div className="container">
            <div className="coin-name" dangerouslySetInnerHTML={{__html: this.state.coinData.Name + " Information"}}></div>
            <Chart />

            <h3>Description</h3>
            <div className="coin-info" dangerouslySetInnerHTML={{__html: this.state.coinData.Description}}>
            </div>

            <h3>Features</h3>
            <div className="coin-info" dangerouslySetInnerHTML={{__html: this.state.coinData.Features}}></div>

            <h3>Technology</h3>
            <div className="coin-info" dangerouslySetInnerHTML={{__html: this.state.coinData.Technology}}></div>

            <div className="coin-info"  id="website-link" dangerouslySetInnerHTML={{__html: "Official " + this.state.coinData.Website + " website"}}>
            </div>

          </div>
          <Footer />
        </div>
    )
  }
}

export default CoinInfo;
