import React, { Component } from "react";
import MainCollection from "./MainCollection";
import MainNewProduct from "./MainNewProduct";
import MainBestSeller from "./MainBestSeller";
import MainEdition from "./MainEdition";
import MainHinceAtelier from "./MainHinceAtelier";
import "./Main.scss";
import { scryRenderedDOMComponentsWithClass } from "react-dom/test-utils";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      scrollY: 0
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", ()=>this.handleScroll())
  }

  handleScroll = () => {
    this.setState({
      scrollY: window.scrollY
    })
    return window.scrollTo({bottom: 0, behavior: "smooth"})
  }

  render() {
    console.log(window.scrollY)
    console.log(this.state.scrollY)

    return (
      <>
        <MainCollection />
        <MainNewProduct />
        <MainBestSeller />
        <MainEdition />
        <MainHinceAtelier />
      </>
    );
  }
}

export default Main;

const componentGroup = {
  1: <MainCollection />,
  2: <MainNewProduct />,
  3: <MainBestSeller />,
  4: <MainEdition />,
  5: <MainHinceAtelier />
}