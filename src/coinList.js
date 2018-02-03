import React, { Component } from 'react';
import './App.css';
import axios from "axios";

class CoinList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coinList: []
    };
  }


  componentDidMount() {
    axios.get(`https://min-api.cryptocompare.com/data/all/coinlist`)
    .then(res => {
      const coins = res.data;
      this.setState({ coinList: coins});
    });
  }



// Object.keys is used to map through the data. Can't map through the data without this because the data is not an array. Map can only be used on arrays.
render() {
  const data = this.state.coinList.Data;
  if (data == null) return null;

  return (
    <div className="App">
      {Object.keys(data).map((key) => (
        <div className="container">
          <table className="table table-striped">
            <tbody>
              <tr>
                <td className="col-md-3" id="name"><img src={`http://www.cryptocompare.com/${data[key].ImageUrl}`} alt="logo" width="30px"/>
                {data[key].CoinName}</td>
                <td className="col-md-2">$100</td>
                <td className="col-md-2">{key}</td>
                <td className="col-md-2">{data[key].Algorithm}</td>
                <td className="col-md-2">{data[key].TotalCoinSupply}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
 }
}


export default CoinList;


/*

<td><img src={`http://www.cryptocompare.com/${data[key].ImageUrl}`} alt="logo" width="40px"/></td>

*/
