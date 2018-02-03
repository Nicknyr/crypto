import React, { Component } from 'react';
import './App.css';
import axios from "axios";

class CoinPrices extends Component {
  constructor(props) {
    super(props);

    this.state = {
      priceList: []
    };
  }


  componentDidMount() {
    axios.get(`https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,EUR&e=Coinbase&extraParams=your_app_name`)
      .then(res => {
        const prices = res.data;
        this.setState({ priceList: prices});
        console.log(prices);
        console.log(prices.USD);
        console.log(prices.EUR);
      });
  }


  render() {
    const USD = this.state.priceList.USD;
    const EUR = this.state.priceList.EUR;
    if (USD == null) return null;

    return (
      <div className="App">
          <div className="container">
            <p>1 Bitcoin is worth {USD} US dollars</p>
          </div>
      </div>
    );
   }
}


  export default CoinPrices;
