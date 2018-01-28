import React, { Component } from 'react';
import './App.css';
import axios from "axios";
//var NumberFormat = require('react-number-format');

class CoinList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coinList: []
    };
  }



  componentDidMount() {
    axios.get(`https://min-api.cryptocompare.com/data/all/coinlist`)
    .then(res => {
      const coins = res.data;
      this.setState({ coinList: coins});
    });
  }



// Object.keys is used to map through the data. Can't map through the data without this because the data is not an array. Map can only be used on arrays.
  render() {
    //console.log(this.state.coinList.Data);
    const data = this.state.coinList.Data;
    if(data == null) return null;
    return (
      <div className="App">
        {Object.keys(data).map((key) => (
          <div className="container">
            <span className="left">{key}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default CoinList;
