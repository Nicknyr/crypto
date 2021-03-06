import React, { Component } from 'react';
import './App.css';
import axios from "axios";
var NumberFormat = require('react-number-format');

class Favorites extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coinList: []
    };
  }



  componentDidMount() {
    axios.get(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP,LTC,BCH,EOS,NEO,DGD,TRX,ETC,XLM,ADA,QTUM,DASH,XMR,IOT,VEN,ICX,ZEC,ELF&tsyms=USD`)
    .then(res => {
      const coins = res.data;
      //console.log(coins);
      this.setState({ coinList: coins});
    });
  }



// Object.keys is used to map through the data. Can't map through the data without this because the data is not an array. Map can only be used on arrays.
  render() {
    return (
      <div className="App">
        {Object.keys(this.state.coinList).map((key) => (
          <div className="container">
            <table className="table table-striped">
              <tbody>
                <tr>
                  <td className="col-md-2" id="name">{key}</td>
                  <td className="col-md-2"><NumberFormat value={this.state.coinList[key].USD} displayType={'text'} decimalPrecision={2} thousandSeparator={true} prefix={'$'}/></td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    );
  }
}

export default Favorites;
