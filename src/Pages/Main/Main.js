import React, { Component } from "react";
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
    this.setState({ scroll: false });

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
        <Footer />
      </>
    );
  }
}

export default Main;
