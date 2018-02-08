import React, { Component } from 'react';
import axios from 'axios';

export default class Searchbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentText: "Search for a cryptocurrency by name",
      header: "",
      results: []
    }
  }


  onHandleChane(event) {
    this.setState({
      currentText: event.target.value
    });
  }


  loadSearchResults(event) {
    event.preventDefault();
    var search = this.state.currentText;
    axios.get(`https://min-api.cryptocompare.com/data/price?fsym=`+ search + `&tsyms=BTC,USD,EUR`)
      .then(res => {

        // results is set up for the MovieDB API. I have to change the following line so it is appropriate for cryptocompare API
        const results = res.data.results.map(obj => ({title: obj.title, overview: obj.overview, poster: obj.poster_path, vote: obj.vote_average}));

        this.setState({
          results,
          header: "Search Results"
        });
      })
  }


  render() {
    return (
      <div className="search-box">
        <form>
          <input type="text" placeholder={this.state.currentText} onChange={(event) => this.onHandleChane(event)}/>
          <button onClick={this.loadSearchResults.bind(this)}><img id ="mag" src ={'magnify.png'} alt=""/></button>
        </form>
      </div>
    );
  }
}
