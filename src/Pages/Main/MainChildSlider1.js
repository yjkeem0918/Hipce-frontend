import React, { Component } from "react";
import "./MainChildSlider1.scss";

class MainChildSlider1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: newProduct.pictures,
      showingPictures: newProduct.pictures[0],
    };
  }

  handlePrev = () => {
    this.setState({});
  };

  render() {
    return (
      <div className="MainChildSlider1">
        <button onClick={handlePrev}></button>
        <button onClick={handleNext}></button>
      </div>
    );
  }
}

export default MainChildSlider1;

const newProduct = {
  pictures: [
    {
      index: 1,
      src:
        "http://hince.co.kr/images/main/new-product/20-06-18-gentle-and-firm.jpg",
    },
    {
      index: 2,
      src:
        "http://hince.co.kr/images/main/new-product/20-06-18-point-of-view.jpg",
    },
    {
      index: 3,
      src:
        "http://hince.co.kr/images/main/new-product/20-06-18-off-balance.jpg",
    },
    {
      index: 4,
      src:
        "http://hince.co.kr/images/main/new-product/20-06-18-new-perspective.jpg",
    },
  ],
};
