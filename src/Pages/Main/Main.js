import React, { Component } from "react";
import SignUp from "../Sign/SignUp";
import Footer from "../../Components/Footer";
import Nav from "../../Components/Nav";

class Main extends Component {
  render() {
    return (
      <div>
        <Nav />
        <SignUp />
        <Footer />
      </div>
    );
  }
}

export default Main;
