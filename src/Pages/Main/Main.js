import React, { Component } from "react";
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
      </div>

    );
  }
}

export default Main;
