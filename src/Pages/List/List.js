import React, { Component } from "react";
import Nav from "../../Components/Nav";
import ProductNav from "../List/ProductNav";
import ProductFilter from "./ProductFilter";
import Product from "./Product";
import ProductListBottom from "../List/ProductListBottom";
import Footer from "../../Components/Footer";
import "./List.scss";

class List extends Component {
  render() {
    return (
      <div className="List">
        <Nav />
        <ProductNav />
        <ProductFilter />
        <div className="productListContainer">
          <ul className="productList">
            {SRC_SAMPLE.map(({ imgsrc, price }, index) => (
              <Product key={index} imgsrc={imgsrc} price={price} />
            ))}
          </ul>
        </div>
        <ProductListBottom />
        <Footer />
      </div>
    );
  }
}
//sample data
const SRC_SAMPLE = [
  {
    name: "무드인핸서 리퀴드 마뜨 얼루어먼트",
    imgsrc:
      "https://hince.co.kr/web/product/tiny/20200617/84f098e93221212f8261345ede808e27.jpg",
    price: 19000,
  },
  {
    name: "무드인핸서 리퀴드 마뜨 얼루어먼트",
    imgsrc:
      "https://hince.co.kr/web/product/tiny/20200617/84f098e93221212f8261345ede808e27.jpg",
    price: 19000,
  },
  {
    name: "무드인핸서 리퀴드 마뜨 얼루어먼트",
    imgsrc:
      "https://hince.co.kr/web/product/tiny/20200617/84f098e93221212f8261345ede808e27.jpg",
    price: 19000,
  },
  {
    name: "무드인핸서 리퀴드 마뜨 얼루어먼트",
    imgsrc:
      "https://hince.co.kr/web/product/tiny/20200617/84f098e93221212f8261345ede808e27.jpg",
    price: 19000,
  },
  {
    name: "무드인핸서 리퀴드 마뜨 얼루어먼트",
    imgsrc:
      "https://hince.co.kr/web/product/tiny/20200617/84f098e93221212f8261345ede808e27.jpg",
    price: 19000,
  },
  {
    name: "무드인핸서 리퀴드 마뜨 얼루어먼트",
    imgsrc:
      "https://hince.co.kr/web/product/tiny/20200617/84f098e93221212f8261345ede808e27.jpg",
    price: 19000,
  },
  {
    name: "무드인핸서 리퀴드 마뜨 얼루어먼트",
    imgsrc:
      "https://hince.co.kr/web/product/tiny/20200617/84f098e93221212f8261345ede808e27.jpg",
    price: 19000,
  },
  {
    name: "무드인핸서 리퀴드 마뜨 얼루어먼트",
    imgsrc:
      "https://hince.co.kr/web/product/tiny/20200617/84f098e93221212f8261345ede808e27.jpg",
    price: 19000,
  },
  {
    name: "무드인핸서 리퀴드 마뜨 얼루어먼트",
    imgsrc:
      "https://hince.co.kr/web/product/tiny/20200617/84f098e93221212f8261345ede808e27.jpg",
    price: 19000,
  },
  {
    name: "무드인핸서 리퀴드 마뜨 얼루어먼트",
    imgsrc:
      "https://hince.co.kr/web/product/tiny/20200617/84f098e93221212f8261345ede808e27.jpg",
    price: 19000,
  },
  {
    name: "무드인핸서 리퀴드 마뜨 얼루어먼트",
    imgsrc:
      "https://hince.co.kr/web/product/tiny/20200617/84f098e93221212f8261345ede808e27.jpg",
    price: 19000,
  },
];

export default List;
