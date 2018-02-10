import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
//import CoinList from './coinList.js';
//import Favorites from './favorites.js';
import NewCoinList from './coin_list.js';
//import CoinPrices from './prices.js';
import Home from './Home.js';
import Footer from './Footer.js';
import * as d3 from 'd3';
import Chart from './d3-2.js';
import InfoPage from './info_page.js';
import CoinInfo from './snapshot.js';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Searchbar from './Searchbar.js';
import Autosuggest from 'react-autosuggest';


class App extends Component {

  render() {

    return (
      <div>
        <div className="App">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/coininfo" component={CoinInfo}/>
              <Route exact path="/info" component={InfoPage}/>
              <Route exact path="/coinlist" component={NewCoinList}/>
              <Route exact path="/autosuggest" component={Autosuggest}/>
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
