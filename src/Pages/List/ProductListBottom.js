import React, { Component } from "react";
import "./ProductListBottom.scss";

export default class ProductListBottom extends Component {
  render() {
    return (
      <div className="productListBottom">
        <span className="arrowLeft"> </span>
        <ul>
          <li className="arrowList">
            <span> 1 </span>
          </li>
          <li className="arrowList">
            <span> 2 </span>
          </li>
        </ul>
        <span className="arrowRight"> </span>
      </div>
    );
  }
}
