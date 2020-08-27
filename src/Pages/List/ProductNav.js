import React, { Component } from "react";
import "./ProductNav.scss";
import { Link, withRouter } from "react-router-dom";

class ProductNav extends Component {
  render() {
    // category=${this.props.match.params.hello}
    return (
      <div className="productNav">
        <Link to="/list/category=lip">
          <img
            alt="productCategory"
            src="https://hince.co.kr/assets/images/hince-category-lip.png"
          />
          <span>Lip</span>
        </Link>
        <Link to="/list/category=eye">
          <img
            alt="productCategory"
            src="https://hince.co.kr/assets/images/hince-category-eye.png"
          />
          <span>Eye</span>
        </Link>
        <Link to="/list/category=cheek">
          <img
            alt="productCategory"
            src="https://hince.co.kr/assets/images/hince-category-cheek.png"
          />
          <span>Cheek</span>
        </Link>
        <Link to="/list/category=nail">
          <img
            alt="productCategory"
            src="https://hince.co.kr/assets/images/hince-category-nail.png"
          />
          <span>Nail</span>
        </Link>
        <Link to="/list/category=object">
          <img
            alt="productCategory"
            src="https://hince.co.kr/assets/images/hince-category-object-sm.png"
          />
          <span>Object</span>
        </Link>
        <Link to="/list/category=edition">
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

export default withRouter(ProductNav);
