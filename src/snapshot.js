import React, { Component } from 'react';
import axios from "axios";


class CoinInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      coinInfo: []
    }
  }

  componentDidMount() {
    axios.get(`https://www.cryptocompare.com/api/data/coinsnapshotfullbyid/?id=1182`)
    .then(res => {
      const info = res.data;
      this.setState({ coinInfo: info});
      console.log(info);
    })
    .catch(error => {
      console.log(error);
    });
  }



  render() {

    return (
      <div className="container">
        <h1>Coin Info Page</h1>
      </div>
    )
  }
}

export default CoinInfo;
