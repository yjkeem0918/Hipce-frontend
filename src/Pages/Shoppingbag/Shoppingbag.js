import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "../../Components/Nav";
import Footer from "../../Components/Footer";
import "../../Styles/common.scss";
import "./Shoppingbag.scss";
import "../../Styles/reset.scss";
import "./ItemList";
import ItemList from "./ItemList";

export default class Shoppingbag extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countNumber: {},
      pickItem: [...pickedItem].map((el) => ({ ...el, active: false })),
      totalPrice: 0,
      realtotalPrice: null,
      shippingFee: 2500,
      checkItem: false,
      emptyDisplay: false,
    };
  }

  componentDidMount() {
    this.setFirstPrice();
  }
  handleCounting = (item, inDecrement, e) => {
    e.preventDefault();
    if (e.target.name === "plusButton" && item.count === 5) {
      alert("최대주문수량 5개");
      return;
    }
    if (e.target.name === "plusButton") {
      this.setState(
        {
          pickItem: this.state.pickItem.map((el) =>
            el.name === item.name
              ? {
                  ...el,
                  price: (el.price * (el.count + 1)) / el.count,
                  count: el.count + inDecrement,
                }
              : el
          ),
        },
        () => this.calculatePrice()
      );
    }
    if (e.target.name === "minusButton" && item.count === 1) {
      return;
    }
    if (e.target.name === "minusButton") {
      this.setState(
        {
          pickItem: this.state.pickItem.map((el) =>
            el.name === item.name
              ? {
                  ...el,
                  price: parseInt((el.price * (el.count - 1)) / el.count),
                  count: el.count + inDecrement,
                }
              : el
          ),
        },
        () => this.calculatePrice()
      );
    }
  };
  checkItem = (item) => {
    this.setState({
      pickItem: this.state.pickItem.map((el) =>
        el.name === item.name ? { ...el, active: true } : el
      ),
    });
  };

  calculatePrice = () => {
    this.setState(
      {
        totalPrice: this.state.pickItem
          .map((el) => el.price)
          .reduce((a, b) => a + b, 0),
      },
      () => this.shippingfeeDelete()
    );
    sessionStorage.setItem(
      "product",
      this.state.pickItem.map((el) => el)
    );
  };

  shippingfeeDelete = () => {
    if (this.state.totalPrice >= 50000) {
      this.setState({ shippingFee: 0 });
    } else {
      this.setState({ shippingFee: 2500 });
    }
  };

  deleteList = (item) => {
    this.setState(
      {
        pickItem: this.state.pickItem.filter((el) => el.name !== item.name),
      },
      () => this.calculatePrice()
    );
  };

  clearList = () => {
    this.setState({ pickItem: [] }, () => this.calculatePrice());
  };

  deleteCheckedItem = (e) => {
    this.setState(
      {
        pickItem: this.state.pickItem.filter((el) => el.active === false),
        emptyDisplay: this.state.pickItem.length === 0 ? true : false,
      },
      () => this.calculatePrice()
    );
  };

  setFirstPrice = () => {
    this.setState(
      {
        totalPrice: this.state.pickItem
          .map((el) => el.price)
          .reduce((a, b) => a + b, 0),
      },
      () => this.calculatePrice()
    );
  };

  render() {
    return (
      <div className="Shoppingbag">
        <Nav />
        <span className="shoppingbagTitle">Shopping Bag</span>
        <section className="OrderdList">
          <span
            className={!this.state.emptyDisplay ? "hidden" : "ShoppingbagEmpty"}
          >
            장바구니에 담으신 상품이 없습니다.
          </span>
          <table className="orderdProductList">
            <ItemList
              pickedItem={this.state.pickItem}
              totalPrice={this.state.totalPrice}
              onSubmit={this.onSearchSubmit}
              clearList={this.clearList}
              deleteList={this.deleteList}
              handleCounting={this.handleCounting}
              checkItem={this.checkItem}
            />
          </table>
        </section>
        <section className="shoppingbagFooter">
          <div className="priceCalculatorWrapper">
            <div>
              <span>5만원 이상 결제 시 무료로 배송 받을 수 있습니다.</span>
              <div>
                <span onClick={(e) => this.deleteCheckedItem(e)}>
                  선택한 상품 삭제하기
                </span>
                <span onClick={this.clearList}>장바구니 비우기</span>
              </div>
            </div>
          </div>
          <div className="priceCalculatedWrapper">
            <div className="PriceCalculated" onChange={(e) => this.cutValue(e)}>
              <ul>
                <li>
                  <span>주문금액</span>
                  <span>{this.state.totalPrice}원</span>
                </li>
                <li>
                  <span>배송비</span>
                  <span>{this.state.shippingFee}원</span>
                </li>
                <li className="sum">
                  <span>합계</span>
                  <span>
                    {this.state.totalPrice + this.state.shippingFee}원
                  </span>
                </li>
              </ul>
            </div>
            <div className="orderButton">
              <Link className="totalOrderButton" to="/checkout">
                전체 주문하기
              </Link>
              <div>
                <Link to="/checkout">선택 상품만 주문</Link>
                <Link to="/checkout" className="naverOrder"></Link>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
//sampleData
const pickedItem = [
  {
    img:
      "https://hince.co.kr/web/product/tiny/20200617/b4b788b34fdd1c711ee75bf74a8096a6.jpg",
    name: "무드인핸서 리퀴드 마뜨 오운 스킨",
    price: 19000,
    count: 2,
  },
  {
    img:
      "https://hince.co.kr/web/product/tiny/20200617/b4b788b34fdd1c711ee75bf74a8096a6.jpg",
    name: "무드 무드무드 리퀴드 마뜨 오운 스킨",
    price: 15000,
    count: 1,
  },
  {
    img:
      "https://hince.co.kr/web/product/tiny/20200617/b4b788b34fdd1c711ee75bf74a8096a6.jpg",
    name: "무드 무드무드 와라라 마뜨 오운 스킨",
    price: 15000,
    count: 1,
  },
];
