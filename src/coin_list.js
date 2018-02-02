import React, { Component } from 'react';
import CoinListItem from './coinListItem.js';


export default class NewCoinList extends Component {

  renderList() {
    const data = this.state.coinList.Data;
    if (data == null) return null;

      return Object.keys(data).map((key) => (
          <CoinListItem
            key={key}
          />

    ))
  }


  render() {
    return (
      <table className='table table-striped'>
        <thead>
          <tr>
            <th className="col-md-2">Coin</th>
            <th className="col-md-2">Symbol</th>
            <th className="col-md-2">Algorithm</th>
            <th className="col-md-2">#</th>
          </tr>
        </thead>
        <tbody>
          {this.renderList()}
        </tbody>
      </table>
    )
  }


}
