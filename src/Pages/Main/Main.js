import React, { Component } from "react";
import SignUp from "../Sign/signUp";
import Nav from "../../Components/Nav";
import MainCollection from "../../Pages/Main/MainCollection";
import MainNewProduct from "../../Pages/Main/MainNewProduct";
import MainBestSeller from "../../Pages/Main/MainBestSeller";
import MainEdition from "../../Pages/Main/MainEdition";
import MainHinceAtelier from "../../Pages/Main/MainHinceAtelier";
import Footer from "../../Components/Footer";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      scrollY: 0,
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", () => this.handleScroll());
  }

  handleScroll = () => {
    this.setState({
      scrollY: window.scrollY,
    });
    return window.scrollTo({ bottom: 0, behavior: "smooth" });
  };

  render() {
    console.log(window.scrollY);
    console.log(this.state.scrollY);

    return (
      <div>
        <SignUp />
        <Nav />
        <MainCollection />
        <MainNewProduct />
        <MainBestSeller />
        <MainEdition />
        <MainHinceAtelier />
        <Footer />
      </div>
    );
  }
}

export default Main;
