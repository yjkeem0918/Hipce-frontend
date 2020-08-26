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
      newColors: [],
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/data/productMockdata.json")
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          newColors: res.srcsample,
        })
      );
  }

  render() {
    const {
      state: { newColors },
    } = this;
    return (
      <div className="List">
        <Nav />
        <ProductNav newColors={newColors} />
        <ProductFilter />
        <div className="productListContainer">
          <ul className="productList">
            {newColors.map(
              ({ main_image, price, name, tag__image, sub_image }, index) => (
                <Product
                  key={index}
                  mainImgSrc={main_image}
                  subImgSrc={sub_image}
                  price={price}
                  name={name}
                  tag={tag__image}
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

export default List;
