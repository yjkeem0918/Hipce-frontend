import React, { Component } from 'react';
import { withRouter, Link } from "react-router-dom";

import "./Nav.scss";

class Nav extends Component {  
  constructor() {
    super();
    this.state = {
      navReduced: false,
      navInMain: true
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleNavReduced)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleNavReduced)
  }

  handleNavReduced = () => {
    if(this.props.history.location.pathname!=="Main") {
      this.setState({
        navInMain: false,
        navReduced: window.scrollY >= 100
      })
    }
  }

  isInsideMain = () => {
    if(this.props.history.location.pathname=="/Main") {
      this.setState({
        navInMain: true
      })
      if(window.scrollY<969) {
        this.setState({
          navInMain: true
        })
      }
      if(window.scrollY>=969&&window.scrollY<2907) {
        this.setState({
          navReduced: false
        })
      }
      if(window.scrollY>=4845) {
        this.setState({
          navReduced: false
        })
      }
    }
    console.log("jijojojojojojoj")
  }

  render() {
    console.log(this.props.history.location.pathname=="/Main")
    console.log(window.scrollY)
    console.log(this.state.navInMain)
    const {navReduced, navInMain} = this.state;
    return (
      <div className={navInMain? "NavBright": navReduced? "NavReduced" : "Nav"}>
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
