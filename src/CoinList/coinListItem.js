import React from 'react';
import * as d3 from 'd3';
import Chart from '../d3-2.js';



const CoinListItem = ({ data }) => {
  return (
    <tr>
      <td className="col-md-3" id="name">
        <img src={`http://www.cryptocompare.com/${data.ImageUrl}`} alt="logo" width="40px"/>
        {data.CoinName}
      </td>
      <td className="col-md-2">$10</td>
      <td className="col-md-2">{data.Algorithm}</td>
      <td className="col-md-2">{data.TotalCoinSupply}</td>
    </tr>

  );

};


export default CoinListItem;
