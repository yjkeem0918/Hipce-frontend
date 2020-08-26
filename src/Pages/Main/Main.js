import React, { Component } from "react";
import Nav from "../../Components/Nav";
import MainCollection from "../../../src/Pages/Main/MainCollection";
import MainNewProduct from "../../../src/Pages/Main/MainNewProduct";
import MainBestSeller from "../../../src/Pages/Main/MainBestSeller";
import MainEdition from "./MainEdition";
import MainHinceAtelier from "./MainHinceAtelier";
import Footer from "../../Components/Footer";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      currentPosY: 0,
      scroll: false,
      navBright: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => this.handleScroll());
  }

  handleScroll = () => {
    if (this.state.scroll && window.scrollY < this.state.currentPosY) return;
    this.setState({ scroll: false }, ()=>this.handleNav());

    if (this.prev > window.scrollY && 
        window.scrollY < this.state.currentPosY
      ) {
      this.setState(
        { scroll: true, currentPosY: this.state.currentPosY - 969 },
        () =>
          window.scrollTo({ top: this.state.currentPosY, behavior: "smooth" })
      );
    } else if (
      this.prev < window.scrollY &&
      window.scrollY > this.state.currentPosY
    ) {
      this.setState(
        { scroll: true, currentPosY: this.state.currentPosY + 969 },
        () =>
          window.scrollTo({ top: this.state.currentPosY, behavior: "smooth" })
      );
    }
    this.prev = window.scrollY;
  };

  render() {
    return (
      <>
        <Nav />
        <MainCollection />
        <MainNewProduct />
        <MainBestSeller />
        <MainEdition />
        <MainHinceAtelier />
        <Footer />
      </>
    );
  }
}

export default Main;
