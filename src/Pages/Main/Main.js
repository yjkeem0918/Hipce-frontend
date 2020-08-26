import React, { Component } from "react";
import Nav from "../../Components/Nav";
import MainCollection from "./Components/MainCollection";
import MainNewProduct from "./Components/MainNewProduct";
import MainBestSeller from "./Components/MainBestSeller";
import MainEdition from "./Components/MainEdition";
import MainHinceAtelier from "./Components/MainHinceAtelier";
import Footer from "../../Components/Footer";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      currentPosY: 0,
      scroll: false,
      navBright: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => this.handleScroll());
  }

  handleScroll = () => {
    const { scroll, currentPosY } = this.state;
    const {scrollY} = window;
    if (this.prev > scrollY && scrollY < currentPosY) {
      this.setState(
        { scroll: true, currentPosY: this.state.currentPosY - 969 },
        () =>
          window.scrollTo({ top: this.state.currentPosY, behavior: "smooth" })
      );
    } else if (this.prev < scrollY && scrollY > currentPosY) {
      this.setState(
        { scroll: true, currentPosY: this.state.currentPosY + 969 },
        () =>
          window.scrollTo({ top: this.state.currentPosY, behavior: "smooth" })
      );
    } else if (scroll && scrollY < currentPosY) return;
    this.setState({ scroll: false });
    this.prev = window.scrollY;
  };

  render() {
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
