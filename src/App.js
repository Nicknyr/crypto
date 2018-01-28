import React, { Component } from 'react';
import './App.css';
import CoinList from './coinList.js';
import Favorites from './favorites.js';

class App extends Component {




  render() {

    return (
      <div className="App">
        <CoinList />
        <Favorites />
      </div>
    );
  }
}

export default App;
