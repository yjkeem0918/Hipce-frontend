import React, { Component } from "react";
import "./MainChildSlider1.scss";
const images = {
  
} 

class MainChildSlider1 extends Component {
  render() {
    return (
      <div className="MainChildSlider1">
        <div>
          <img src="http://hince.co.kr/images/main/new-product/20-06-18-gentle-and-firm.jpg" />
        </div>
        <div>
          <img src="http://hince.co.kr/images/main/new-product/20-06-18-point-of-view.jpg" />
        </div>
        <div>
          <img src="http://hince.co.kr/images/main/new-product/20-06-18-off-balance.jpg" />
        </div>
        <div>
          <img src="http://hince.co.kr/images/main/new-product/20-06-18-new-perspective.jpg" />
        </div>
        <div>
          <button onChange={handlePrev}>Prev</button>
          <button onChange={handleNext}>Next</button>
        </div>
      </div>
    );
  }
}

export default MainChildSlider1;
