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
      pickItem: [...pickedItem],
      totalPrice: 0,
      realtotalPrice: null,
      shippingFee: 2500,
    };
  }

  handleCounting = (item, inDecrement, e) => {
    e.preventDefault();
    if (e.target.name == "plusButton" && item.count == 5) {
      alert("최대주문수량 5개");
      return;
    }
    if (e.target.name == "plusButton") {
      this.setState({
        pickItem: this.state.pickItem.map((el) =>
          el.name == item.name
            ? {
                ...el,
                price: (el.price * (el.count + 1)) / el.count,
                count: el.count + inDecrement,
              }
            : el
        ),
      });
    }
    if (e.target.name == "minusButton" && item.count == 1) {
      return;
    }
    if (e.target.name == "minusButton") {
      this.setState({
        pickItem: this.state.pickItem.map((el) =>
          el.name == item.name
            ? {
                ...el,
                price: parseInt((el.price * (el.count - 1)) / el.count),
                count: el.count + inDecrement,
              }
            : el
        ),
      });
    }
    if (this.state.totalPrice >= 50000) {
      this.setState({ shippingFee: 0 });
    }
    this.setState({
      totalPrice: this.state.pickItem
        .map((el) => el.price)
        .reduce((a, b) => a + b, 0),
    });
  };

  deleteList = (item) => {
    this.setState({
      pickItem: this.state.pickItem.filter((el) => el.name !== item.name),
    });
  };

  clearList = () => {
    console.log(this.state.pickItem);
    this.setState({ pickItem: [] });
    console.log(this.state.pickItem);
  };

  componentDidMount() {
    // fetch.("URL")
    // .then(res => res.json())
    // .then(res =>this.setState({pickItem: res.map(el => el.sth)}))
    this.setFirstPrice();
  }

  setFirstPrice = () => {
    this.setState({
      totalPrice: this.state.pickItem
        .map((el) => el.price)
        .reduce((a, b) => a + b, 0),
    });
  };

  render() {
    return (
      <div className="Shoppingbag">
        <Nav />
        <span className="ShoppingbagTitle">Shopping Bag</span>
        <section className="OrderdList">
          <span className="ShoppingbagEmpty">
            장바구니에 담으신 상품이 없습니다.
          </span>
          <table className="OrderdProductList">
            <ItemList
              pickedItem={this.state.pickItem}
              totalPrice={this.state.totalPrice}
              onSubmit={this.onSearchSubmit}
              clearList={this.clearList}
              deleteList={this.deleteList}
              handleCounting={this.handleCounting}
            />
          </table>
        </section>
        <section className="ShoppingbagFooter">
          <div className="PriceCalculatorWrapper">
            <div>
              <span>5만원 이상 결제 시 무료로 배송 받을 수 있습니다.</span>
              <div>
                <span>선택한 상품 삭제하기</span>
                <span onClick={this.clearList}>장바구니 비우기</span>
              </div>
            </div>
          </div>
          <div className="PriceCalculatedWrapper">
            <div className="PriceCalculated" onChange={(e) => this.cutValue(e)}>
              <ul>
                <li>
                  <span>주문금액</span>
                  <span className="CalculatedPrice">
                    {this.state.totalPrice}원
                  </span>
                </li>
                <li>
                  <span>배송비</span>
                  <span className="ShippingFee">
                    {this.state.shippingFee}원
                  </span>
                </li>
                <li className="sum">
                  <span>합계</span>
                  <span className="ShippingFee">
                    {this.state.totalPrice + this.state.shippingFee}원
                  </span>
                </li>
              </ul>
            </div>
            <div className="OrderButton">
              <Link className="totalOrderButton" to="/Main">
                전체 주문하기
              </Link>
              <div>
                <Link to="/List">선택 상품만 주문</Link>
                <Link to="/List" className="NaverOrder"></Link>
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
