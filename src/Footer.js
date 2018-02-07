import React from 'react';


const Footer = () => {
  return (
    <div className="Footer">
      <div className="links">
        <ul>
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
          <li><a href="#">Link 4</a></li>
        </ul>
      </div>
      <div className="cryptocompare">
        <p>Made with the<a href="https://www.cryptocompare.com/">CryptoCompare</a>API</p>
      </div>
    </div>
  );
};


export default Footer;
