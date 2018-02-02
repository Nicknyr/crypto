import React from 'react';


const CoinListItem = (props) => {
  const data = this.state.coinList.Data;
  if (data == null) return null;

  return (
    <tr>
      <td className="col-md-2">{props.data[key].CoinName}</td>
      <td className="col-md-2">{props.key}</td>
      <td className="col-md-2">{props.data[key].Algorithm}</td>
      <td className="col-md-2">{props.data[key].SortOrder}</td>
    </tr>

  );

};


export default CoinListItem;
