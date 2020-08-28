import React, { Component } from "react";
import Nav from "../../Components/Nav";
import ProductNav from "../List/ProductNav";
import ProductFilter from "./ProductFilter";
import Product from "./Product";
import ProductListBottom from "../List/ProductListBottom";
import Footer from "../../Components/Footer";
import "./List.scss";
import API from "../../config";

class List extends Component {
  constructor() {
    super();
    this.state = {
      newColors: [],
    };
  }

  componentDidMount() {
    fetch(`${API}/products?category=lip`)
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          newColors: res.products,
        })
      );
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.hello !== this.props.match.params.hello)
      fetch(`http://3.17.134.84:8000/products?${this.props.match.params.hello}`)
        .then((res) => res.json())
        .then((res) =>
          this.setState({
            newColors: res.products,
          })
        );
  }

  getItem = (id, price, name, mainImgSrc) => {
    let getData = {
      id: id,
      price: price,
      name: name,
      mainImgSrc: mainImgSrc,
    };
    sessionStorage.setItem(`${id}`, JSON.stringify(getData));

    this.props.history.push("/shoppingbag");
  };

  render() {
    const {
      state: { newColors },
    } = this;
    return (
      <div className="List">
        <Nav />
        <ProductNav newColors={newColors} />
        <ProductFilter titleName={this.props.match.params.hello} />
        <div className="productListContainer">
          <ul className="productList">
            {newColors.map(
              (
                { main_image, price, name, tag__image, sub_image, id },
                index
              ) => (
                <Product
                  id={id}
                  index={index}
                  mainImgSrc={main_image}
                  subImgSrc={sub_image}
                  price={price}
                  name={name}
                  tag={tag__image}
                  getItem={this.getItem}
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
