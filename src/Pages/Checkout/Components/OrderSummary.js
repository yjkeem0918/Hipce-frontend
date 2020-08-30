import React, { Component } from "react";
import "./OrderSummary.scss";

class OrderSummary extends Component {
  render() {
    return this.props.orderItem.map((el) => (
      <div className="OrderSummary">
        <img src={el.mainImgSrc} />
        <div className="productInfo">
          <div className="name">
            <p>{el.name}</p>
            <span>{el.count}</span>
          </div>
          <div className="price">
            <span>{Number(el.price).toLocaleString()}</span>원
          </div>
        </div>
      </div>
    ));
  }
}

export default OrderSummary;
