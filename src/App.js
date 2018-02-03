import React, { Component } from 'react';
import './App.css';
import CoinList from './coinList.js';
import Favorites from './favorites.js';
//import NewCoinList from './coin_list.js';
import CoinPrices from './prices.js';
import TableHeader from './coinListHeader.js';

class App extends Component {

  render() {

    return (
      <div className="App">
        
        <TableHeader />
        <CoinList />
      </div>
    );
  }
}

export default App;
