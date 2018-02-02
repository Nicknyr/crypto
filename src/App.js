import React, { Component } from 'react';
import './App.css';
import CoinList from './coinList.js';
import Favorites from './favorites.js';
//import NewCoinList from './coin_list.js';

class App extends Component {

  render() {

    return (
      <div className="App">
        <CoinList />
      </div>
    );
  }
}

export default App;
