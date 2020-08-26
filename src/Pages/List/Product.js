import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Product.scss";

export default class Product extends Component {
  state = {
    hidden:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQG3kNuIYI6goHe8l5pt9j3Nw1Sm96BqS5yVw&usqp=CAU",
  };

  render() {
    return (
      <li className="Product">
        <section className="productImage">
          <Link>
            <img
              className="productMainImg"
              alt="productMainImg"
              src={this.props.mainImgSrc}
            />
            <img
              className="productSubImg"
              alt="productSubImg"
              src={this.props.subImgSrc}
            />
          </Link>
        </section>
        <section className="productBottom">
          <div className="productBottomValue">
            <div>
              {this.props.tag === null ? (
                ""
              ) : (
                <img alt="stateLogo" src={this.props.tag} />
              )}
            </div>
            <div>
              <Link to="/detail">
                <p>{this.props.name}</p>
              </Link>
              <Link>
                <img
                  alt="cartMark"
                  src="http://hince.co.kr/assets/images/hince-cart-icon.jpg"
                />
              </Link>
            </div>
          </div>
          <span>{Number(this.props.price).toLocaleString()}원</span>
        </section>
      </li>
    );
  }
}
