import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
//import CoinList from './coinList.js';
//import Favorites from './favorites.js';
import NewCoinList from './coin_list.js';
//import CoinPrices from './prices.js';
//import TableHeader from './coinListHeader.js';
import Footer from './Footer.js';
//import SVGChart from './d3.js';
import * as d3 from 'd3';
import Chart from './d3-2.js';

class App extends Component {

  render() {

    return (
      <div className="App">
        <Header />
        <Chart />
        <NewCoinList />
        <Footer />
      </div>
    );
  }
}

export default App;
