import React, { Component } from "react";
import MainBestSellerSlider from "./MainBestSellerSlider";
import "./MainBestSeller.scss";

class MainBestSeller extends Component {
  render() {
    return (
      <div className="MainBestSeller">
        <div className="sectionLabel">03</div>
        <div className="sectionTitle">
          <span></span>
          <h1>Best Seller</h1>
          <p>가장 많은 사랑을 받고있는 힌스의 베스트셀러</p>
        </div>
        <MainBestSellerSlider/>
      </div>
    );
  }
}

export default MainBestSeller;
