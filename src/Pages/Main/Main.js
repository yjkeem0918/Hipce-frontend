import React, { Component } from "react";
import Nav from "../../Components/Nav";
import MainCollection from "../../Pages/Main/MainCollection";
import MainNewProduct from "../../Pages/Main/MainNewProduct";
import MainBestSeller from "../../Pages/Main/MainBestSeller";
import MainEdition from "../../Pages/Main/MainEdition";
import MainHinceAtelier from "../../Pages/Main/MainHinceAtelier";
import Footer from "../../Components/Footer";
import Search from "../../Pages/Search/Search";

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
