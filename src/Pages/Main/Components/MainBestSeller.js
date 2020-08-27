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
          <h1>Beauty Sale</h1>
          <p>할인된 가격으로 힌스의 베스트 셀러를 만나보세요.</p>
        </div>
        <MainBestSellerSlider discountProduct={this.props.discountProduct}/>
      </div>
    );
  }
}

export default MainBestSeller;