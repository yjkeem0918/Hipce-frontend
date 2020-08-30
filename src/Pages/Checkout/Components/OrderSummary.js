import React, { Component } from "react";
import "./OrderSummary.scss";

class OrderSummary extends Component {
  render() {
    return this.props.orderItem.map((el) => (
      <div className="OrderSummary">
        <img src={el.image} />
        <div className="productInfo">
          <div className="name">
            <p>{el.name}</p>X<span>{el.quantity}</span>
          </div>
          <div className="price">
            <span>{Number(el.price) * Number(el.quantity)}</span>원
          </div>
        </div>
      </div>
    ));
  }
}

export default OrderSummary;
