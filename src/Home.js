import React from 'react';
import * as d3 from 'd3';
import Chart from './d3-2.js';
import Header from './Header.js';
import Footer from './Footer.js';


const Home = (props) => {
  return (
    <div>
      <Header />
      <div className="container">
        <h2>Home Page</h2>
      </div>
      <Footer />
    </div>
  );

};


export default Home;
