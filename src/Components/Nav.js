import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import "./Nav.scss";
class Nav extends Component {
  constructor() {
    super();
    this.state = {
      navReduced: false,
      navInMain: true,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleNav);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleNav);
  }

  handleNav = () => {
    const { pathname } = this.props.history.location;
    const { scrollY } = window;
    if (pathname == "/Main") {
      this.setState({
        navInMain: true,
      });
      if (scrollY < 969) {
        this.setState({
          navInMain: true,
        });
      }
      if (scrollY >= 969 && scrollY < 2907) {
        this.setState({
          navInMain: false,
          navReduced: false,
        });
      }
      if (scrollY >= 3876) {
        this.setState({
          navInMain: false,
          navReduced: false,
        });
      }
    } else if (pathname !== "Main") {
      this.setState({
        navInMain: false,
        navReduced: window.scrollY >= 100,
      });
    }
  };

  render() {
    const { navReduced, navInMain } = this.state;
    return (
      <div
        className={navInMain ? "NavBright" : navReduced ? "NavReduced" : "Nav"}
      >
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
              <Link to="/" />
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

export default withRouter(Nav);
