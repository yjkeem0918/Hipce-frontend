import React, { Component } from "react";
import MainNewProductSlider from "./MainNewProductSlider";
import "./MainNewProduct.scss";

class MainNewProduct extends Component {
  render() {
    return (
      <div className="MainNewProduct">
        <div className="sectionLabel">02</div>
        <div className="sectionTitle">
          <span></span>
          <h1>New Product</h1>
          <p>한스의 신상품을 가장 먼저 만나보세요.</p>
        </div>
        <MainNewProductSlider newProduct={this.props.newProduct} />
      </div>
    );
  }
}

export default MainNewProduct;
