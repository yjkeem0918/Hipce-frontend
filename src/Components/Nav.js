import React, { Component } from "react";
import "./Nav.scss";

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <div className="siteLogo">
          <a href="/"></a>
        </div>
        <div className="siteMenu">
          <ul>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Collection</a>
            </li>
            <li>
              <a href="/">Shop</a>
            </li>
            <li>
              <a href="/">Store</a>
            </li>
            <li>
              <a href="/">Service</a>
            </li>
          </ul>
        </div>
        <div className="siteExtra">
          <ul>
            <li>
              <a href="/"></a>
            </li>
            <li>
              <a href="/"></a>
            </li>
            <li>
              <a href="/"></a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;
