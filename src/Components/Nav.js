import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "../Pages/Search/Search";

import "./Nav.scss";

class Nav extends Component {
  state = {
    isModalActive: false,
  };

  showModal = () => {
    this.setState({ isModalActive: true });
  };
  hideModal = () => {
    this.setState({ isModalActive: false });
  };

  render() {
    return (
      <div className="Nav">
        <div className="siteLogo">
          <Link to="/main" />
        </div>
        <div className="siteMenu">
          <ul>
            <li>
              <Link to="/About">About</Link>
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
              <Link to="/login" />
            </li>
            <li>
              <Link
                alt="search "
                onClick={() => this.setState({ isModalActive: true })}
              />
              {this.state.isModalActive && (
                <Search
                  onClose={() => this.setState({ isModalActive: false })}
                />
              )}
            </li>
            <li>
              <Link to="/shoppingbag" />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;
