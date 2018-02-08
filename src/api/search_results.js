import React from 'react';
import axios from 'axios';

export const getCoinPrice = (query) => {
  return axios.get(`https://min-api.cryptocompare.com/data/price?fsym=`+ query + `&tsyms=BTC,USD,EUR`)
}
