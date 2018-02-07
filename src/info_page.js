import React from 'react';
import * as d3 from 'd3';
import Chart from './d3-2.js';


const InfoPage = (props) => {
  return (
    <div className="container">
      <h2>Coin Name</h2>
      <Chart />
      <div className="coin-info">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum luctus blandit faucibus. Cras elementum nulla tempus eros ullamcorper pharetra sit amet sed elit. Nunc varius leo at dictum malesuada. Sed tincidunt porttitor est vel mollis. Sed nisi sem, aliquet quis nisi quis, pretium condimentum mauris. Morbi vel ante odio. Nullam vel tincidunt lacus, sed luctus odio.
        </p>
        <a href="https://www.bitcoin.org">Official Website</a>
      </div>

    </div>

  );

};


export default InfoPage;
