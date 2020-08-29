import React, { Component } from "react";
import "./ProductDetail.scss";

class ProductDetail extends Component {
  render() {
    return (
      <div className="ProductDetail">
        <nav>
          <a href="#">
            <span className="detailInfo">상세 정보</span>
          </a>
          <a href="#review">
            <span className="gotoReview">리뷰 보기</span>
          </a>
        </nav>
        <div className="detailContainer">
          {this.props.descriptionImage.length &&
            this.props.descriptionImage.map((el) => {
              return <img alt="상세이미지" src={el} />;
            })}
        </div>
      </div>
    );
  }
}

export default ProductDetail;
