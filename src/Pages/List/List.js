import React, { Component } from "react";
import Nav from "../../Components/Nav";
import ProductNav from "../List/ProductNav";
import ProductFilter from "./ProductFilter";
import Product from "./Product";
import ProductListBottom from "../List/ProductListBottom";
import Footer from "../../Components/Footer";
import "./List.scss";

class List extends Component {
  constructor() {
    super();

    this.state = {
      newColors: [...SRC_SAMPLE],
    };
  }
  // componentDidMount() {
  //   fetch("http://10.58.2.217:8000/shop/products")
  //     .then((res) => res.json())
  //     .then((res) => this.setState({ newColors: res.products }));
  // }

  // componentDidUpdate(prevProps){
  //   if(prevProps.match.params.sth ! == this.props.match.params.sth){
  //   fetch("http://10.58.2.217:8000/shop/products")
  //     .then((res) => res.json())
  //     .then((res) => this.setState({ newColors: res.products }));
  //   }
  // }

  render() {
    console.log(this.state.newColors);
    return (
      <div className="List">
        <Nav />
        <ProductNav newColors={this.state.newColors} />
        <ProductFilter />
        <div className="productListContainer">
          <ul className="productList">
            {this.state.newColors.map(
              ({ main_image, price, name, tag, sub_image }, index) => (
                <Product
                  key={index}
                  mainImgSrc={main_image}
                  subImgSrc={sub_image}
                  price={price}
                  name={name}
                  tag={tag}
                />
              )
            )}
          </ul>
        </div>
        <ProductListBottom />
        <Footer />
      </div>
    );
  }
}
//sample data

// ("http://hince.co.kr//hince.co.kr/web/product/tiny/20200617/799189befb8ee4dbb9a2e1bb31f970fd.jpg");
// ("무드인핸서 리퀴드 마뜨 얼루어먼트");
// ("19000.0000");
// ("http://hince.co.kr//hince.co.kr/web/product/medium/20200617/306c6ab8ac1a6d72f935c93b4fbfd672.jpg");
// ("http://hince.co.kr/web/upload/custom_1.png");
const SRC_SAMPLE = [
  {
    main_image:
      "https://hince.co.kr/web/product/tiny/20200617/799189befb8ee4dbb9a2e1bb31f970fd.jpg",
    name: "무드인핸서 리퀴드 마뜨 얼루어먼트",
    price: "19000.0000",
    sub_image:
      "https://hince.co.kr/web/product/medium/20200617/306c6ab8ac1a6d72f935c93b4fbfd672.jpg",
    tag: "http://hince.co.kr/web/upload/custom_1.png",
  },
  {
    main_image:
      "https://hince.co.kr/web/product/tiny/20200617/799189befb8ee4dbb9a2e1bb31f970fd.jpg",
    name: "무드인핸서 리퀴드 마뜨 얼루어먼트",
    price: "19000.0000",
    sub_image:
      "https://hince.co.kr/web/product/medium/20200617/306c6ab8ac1a6d72f935c93b4fbfd672.jpg",
    tag: "http://hince.co.kr/web/upload/custom_1.png",
  },
  {
    main_image:
      "https://hince.co.kr/web/product/tiny/20200617/799189befb8ee4dbb9a2e1bb31f970fd.jpg",
    name: "무드인핸서 리퀴드 마뜨 얼루어먼트",
    price: "19000.0000",
    sub_image:
      "https://hince.co.kr/web/product/medium/20200617/306c6ab8ac1a6d72f935c93b4fbfd672.jpg",
    tag: "http://hince.co.kr/web/upload/custom_1.png",
  },
  {
    main_image:
      "https://hince.co.kr/web/product/tiny/20200617/799189befb8ee4dbb9a2e1bb31f970fd.jpg",
    name: "무드인핸서 리퀴드 마뜨 얼루어먼트",
    price: "19000.0000",
    sub_image:
      "https://hince.co.kr/web/product/medium/20200617/306c6ab8ac1a6d72f935c93b4fbfd672.jpg",
    tag: "http://hince.co.kr/web/upload/custom_1.png",
  },
  {
    main_image:
      "https://hince.co.kr/web/product/tiny/20200617/799189befb8ee4dbb9a2e1bb31f970fd.jpg",
    name: "무드인핸서 리퀴드 마뜨 얼루어먼트",
    price: "19000.0000",
    sub_image:
      "https://hince.co.kr/web/product/medium/20200617/306c6ab8ac1a6d72f935c93b4fbfd672.jpg",
    tag: "http://hince.co.kr/web/upload/custom_1.png",
  },
  {
    main_image:
      "https://hince.co.kr/web/product/tiny/20200617/799189befb8ee4dbb9a2e1bb31f970fd.jpg",
    name: "무드인핸서 리퀴드 마뜨 얼루어먼트",
    price: "19000.0000",
    sub_image:
      "https://hince.co.kr/web/product/medium/20200617/306c6ab8ac1a6d72f935c93b4fbfd672.jpg",
    tag: "http://hince.co.kr/web/upload/custom_1.png",
  },
  {
    main_image:
      "https://hince.co.kr/web/product/tiny/20200617/799189befb8ee4dbb9a2e1bb31f970fd.jpg",
    name: "무드인핸서 리퀴드 마뜨 얼루어먼트",
    price: "19000.0000",
    sub_image:
      "https://hince.co.kr/web/product/medium/20200617/306c6ab8ac1a6d72f935c93b4fbfd672.jpg",
    tag: "http://hince.co.kr/web/upload/custom_1.png",
  },
  {
    main_image:
      "https://hince.co.kr/web/product/tiny/20200617/799189befb8ee4dbb9a2e1bb31f970fd.jpg",
    name: "무드인핸서 리퀴드 마뜨 얼루어먼트",
    price: "19000.0000",
    sub_image:
      "https://hince.co.kr/web/product/medium/20200617/306c6ab8ac1a6d72f935c93b4fbfd672.jpg",
    tag: "http://hince.co.kr/web/upload/custom_1.png",
  },
  {
    main_image:
      "https://hince.co.kr/web/product/tiny/20200617/799189befb8ee4dbb9a2e1bb31f970fd.jpg",
    name: "무드인핸서 리퀴드 마뜨 얼루어먼트",
    price: "19000.0000",
    sub_image:
      "https://hince.co.kr/web/product/medium/20200617/306c6ab8ac1a6d72f935c93b4fbfd672.jpg",
    tag: "http://hince.co.kr/web/upload/custom_1.png",
  },
  {
    main_image:
      "https://hince.co.kr/web/product/tiny/20200617/799189befb8ee4dbb9a2e1bb31f970fd.jpg",
    name: "무드인핸서 리퀴드 마뜨 얼루어먼트",
    price: "19000.0000",
    sub_image:
      "https://hince.co.kr/web/product/medium/20200617/306c6ab8ac1a6d72f935c93b4fbfd672.jpg",
    tag: "http://hince.co.kr/web/upload/custom_1.png",
  },
  {
    main_image:
      "https://hince.co.kr/web/product/tiny/20200617/799189befb8ee4dbb9a2e1bb31f970fd.jpg",
    name: "무드인핸서 리퀴드 마뜨 얼루어먼트",
    price: "19000.0000",
    sub_image:
      "https://hince.co.kr/web/product/medium/20200617/306c6ab8ac1a6d72f935c93b4fbfd672.jpg",
    tag: "http://hince.co.kr/web/upload/custom_1.png",
  },
  {
    main_image:
      "https://hince.co.kr/web/product/tiny/20200617/799189befb8ee4dbb9a2e1bb31f970fd.jpg",
    name: "무드인핸서 리퀴드 마뜨 얼루어먼트",
    price: "19000.0000",
    sub_image:
      "https://hince.co.kr/web/product/medium/20200617/306c6ab8ac1a6d72f935c93b4fbfd672.jpg",
    tag: "http://hince.co.kr/web/upload/custom_1.png",
  },
  {
    main_image:
      "https://hince.co.kr/web/product/tiny/20200617/799189befb8ee4dbb9a2e1bb31f970fd.jpg",
    name: "무드인핸서 리퀴드 마뜨 얼루어먼트",
    price: "19000.0000",
    sub_image:
      "https://hince.co.kr/web/product/medium/20200617/306c6ab8ac1a6d72f935c93b4fbfd672.jpg",
    tag: "http://hince.co.kr/web/upload/custom_1.png",
  },
];

export default List;
