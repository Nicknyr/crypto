import React, { Component } from 'react';
import CoinListItem from './CoinList/coinListItem.js';
import Header from './Header.js';
import Footer from './Footer.js';

class NewCoinList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      coinList: []
    }
  }

  componentDidMount() {
    fetch(`https://min-api.cryptocompare.com/data/all/coinlist`)
      .then(res => res.json())
      .then(json => this.setState({ coinList: json }));
  }

  renderList() {
    const data = this.state.coinList.Data;

    if (data == null) return null;

    return Object.keys(data).map((symbol) => (
      <CoinListItem data={data[symbol]} />

    ))
  }

  render() {
    return (
      <div>
        <Header/>
        <div className="container">
          <table className='table table-striped'>
            <thead>
              <tr>
                <th className="col-md-3">Coin</th>
                <th className="col-md-3">Value (USD)</th>
                <th className="col-md-3">Algorithm</th>
                <th className="col-md-3">Total Supply</th>
              </tr>
            </thead>
            <tbody>
              {this.renderList()}
            </tbody>
          </table>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default NewCoinList;
