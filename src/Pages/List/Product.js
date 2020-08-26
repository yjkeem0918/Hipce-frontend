import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Product.scss";

export default class Product extends Component {
  render() {
    const {
      props: { mainImgSrc, subImgSrc, tag, name, price },
    } = this;
    return (
      <li className="Product">
        <section className="productImage">
          <Link>
            <img
              className="productMainImg"
              alt="productMainImg"
              src={mainImgSrc}
            />
            <img
              className="productSubImg"
              alt="productSubImg"
              src={subImgSrc}
            />
          </Link>
        </section>
        <section className="productBottom">
          <div className="productBottomValue">
            <div>{tag === null ? "" : <img alt="stateLogo" src={tag} />}</div>
            <div>
              <Link to="/detail">
                <p>{name}</p>
              </Link>
              <Link>
                <img
                  alt="cartMark"
                  src="http://hince.co.kr/assets/images/hince-cart-icon.jpg"
                />
              </Link>
            </div>
          </div>
          <span>{Number(price).toLocaleString()}원</span>
        </section>
      </li>
    );
  }
}
