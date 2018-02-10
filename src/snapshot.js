import React, { Component } from 'react';
import axios from "axios";
//import InfoPage from './info_page.js';


class CoinInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    /*  coinName: '',
      coinImage: '',
      coinDescription: '',
      coinFeatures: '',
      coinTech: '',
      coinSupply: '',
      coinMined: '',
      website: ''
    */
      coinData: []
    }
  }

  // Adding https://cors-anywhere.herokuapp.com/ to API URL fixed the CORS error
  //https://www.cryptocompare.com/api/data/coinsnapshotfullbyid/?id=1182
  componentDidMount() {
    axios.get(`https://cors-anywhere.herokuapp.com/https://www.cryptocompare.com/api/data/coinsnapshotfullbyid/?id=1182`)
    .then(res => {
        const info = res.data.Data.General;
        this.setState({
        /*  coinName: info.Name,
          coinImage: info.ImageUrl,
          coinDescription: info.Description,
          coinFeatures: info.Features,
          coinTech: info.Technology,
          coinSupply: info.TotalCoinSupply,
          coinMined: info.TotalCoinsMined,
          website: info.Website
        */
          coinData: info
        });
        //console.log(this.state);
    })
    .catch(error => {
      console.log(error);
    });
  }


  render() {
    const data = this.state.coinData;
    console.log(data);

    if(data == null) return null;

    return (
      //Object.keys(data).map((key) => (

        <div className="container">
          <h1>Coin Info Page</h1>
          <h2>{this.state.coinData.Name}</h2>
          <p>{this.state.coinData.Description}</p>
          <p>{this.state.coinData.Technology}</p>
          <p>{this.state.coinData.Features}</p>
        </div>
      //))
    )
  }
}

export default CoinInfo;
