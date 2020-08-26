import React, { Component } from "react";
import "./ProductNav.scss";
import { Link } from "react-router-dom";

export default class ProductNav extends Component {
  render() {
    return (
      <div className="productNav">
        <Link
        // onClick={() =>
        //   this.props.history.push(`http://10.58.2.217:8000/shop/products?category=${}`)
        // }
        >
          <img
            alt="productCategory"
            src="https://hince.co.kr/assets/images/hince-category-lip.png"
          />
          <span>Lip</span>
        </Link>
        <Link to="/list">
          <img
            alt="productCategory"
            src="https://hince.co.kr/assets/images/hince-category-eye.png"
          />
          <span>Eye</span>
        </Link>
        <Link to="/list">
          <img
            alt="productCategory"
            src="https://hince.co.kr/assets/images/hince-category-cheek.png"
          />
          <span>Cheek</span>
        </Link>
        <Link to="/list">
          <img
            alt="productCategory"
            src="https://hince.co.kr/assets/images/hince-category-nail.png"
          />
          <span>Nail</span>
        </Link>
        <Link to="/main">
          <img
            alt="productCategory"
            src="https://hince.co.kr/assets/images/hince-category-object-sm.png"
          />
          <span>Object</span>
        </Link>
        <Link to="/list">
          <img
            alt="productCategory"
            src="https://hince.co.kr/assets/images/hince-category-edition.png"
          />
          <span>Edition</span>
        </Link>
      </div>
    );
  }
}
