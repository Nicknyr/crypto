import React from 'react';


const Header = () => {
  return (
    <div className="Header">
      <div className="nav">
        <ul>
          <li><a href="#">Link 1</a></li>
          <li><a href="/coinlist">List</a></li>
          <li><a href="/info">Info Page</a></li>
          <li><a href="/">Home</a></li>
        </ul>
      </div>

    </div>
  );
};


export default Header;
