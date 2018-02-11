import React from 'react';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';


const Header = () => {
  return (
    <div className="Header">
      <div className="nav">
        <ul>
          <li><NavLink to="/" exact activeStyle={{color: "red"}}>Home</NavLink></li>
          <li>><NavLink to="/coininfo" activeStyle={{color: "red"}}>Info</NavLink></li>
          <li>><NavLink to="/coinlist" activeStyle={{color: "red"}}>List</NavLink></li>
        </ul>
      </div>

    </div>
  );
};


export default Header;
