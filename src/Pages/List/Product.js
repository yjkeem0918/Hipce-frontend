import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Product.scss";

export default class Product extends Component {
  render() {
    return (
      <li className="Product">
        <section className="productImage">
          <img alt="productImg" src={this.props.imgsrc} />
        </section>
        <section className="productBottom">
          <div className="productBottomValue">
            <div>
              <img
                alt="cartbutton"
                src="http://hince.co.kr/web/upload/custom_1.png"
              />
            </div>
            <div>
              <Link to="/detail">
                <p>무드인핸서 리퀴드 마뜨 얼루어먼트</p>
              </Link>
              <img
                alt="cartMark"
                src="http://hince.co.kr/assets/images/hince-cart-icon.jpg"
              />
            </div>
          </div>
          <span>{Number(this.props.price).toLocaleString()}원</span>
        </section>
      </li>
    );
  }
}
