import React, { Component } from 'react';
import './App.css';

function TableHeader() {
  return (
    <div className="table-header">
      <div className="container">
        <table className="table table-striped">
        <thead>
          <tr>
            <th className="col-md-2">Coin</th>
            <th className="col-md-2">Value (USD)</th>
            <th className="col-md-2">Symbol</th>
            <th className="col-md-2">Algorithm</th>
            <th className="col-md-2">Total Supply</th>
          </tr>
         </thead>
        </table>
      </div>
    </div>
  )
}

export default TableHeader;
