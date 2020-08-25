import React, { Component } from 'react';
import { Link } from "react-router-dom"
import "./Nav.scss";

class Nav extends Component {  
  render() {
    return (
      <div className="Nav">
        <div className="siteLogo">
          <Link to="/List" />
        </div>
        <div className="siteMenu">
          <ul>
            <li className="about">
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Collection</Link>
            </li>
            <li>
              <Link to="/">Shop</Link>
            </li>
            <li>
              <Link to="/">Store</Link>
            </li>
            <li>
              <Link to="/">Service</Link>
            </li>
          </ul>
        </div>
        <div className="siteExtra">
          <ul>
            <li>
              <Link to="/" />
            </li>
            <li>
              <Link to="/" />
            </li>
            <li>
              <Link to="/" />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;
