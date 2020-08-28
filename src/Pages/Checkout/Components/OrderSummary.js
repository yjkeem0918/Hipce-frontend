import React, { Component } from "react";
import "./OrderSummary.scss"

class OrderSummary extends Component {
  render() {
    return (
      <div className="OrderSummary">
        <img src="http://hince.co.kr/web/product/tiny/20200617/98d7c1e39705585e592fe835eae8442e.jpg" />
        <div className="productInfo">
          <div className="name">
            <p>무드인핸서 리퀴드 마뜨 오픈 도어x</p>
            <span>2</span>
          </div>
          <div className="price">
            <span>38,000</span>원
          </div>
        </div>
      </div>
    );
  }
}

export default OrderSummary;
