import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "../../Components/Nav";
import ItemList from "./ItemList";
import Footer from "../../Components/Footer";
import "./Shoppingbag.scss";
import { API } from "../../../src/config";

export default class Shoppingbag extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countNumber: {},
      pickItem: [].map((el) => ({ ...el, count: 1 })),
      totalPrice: 0,
      shippingFee: 2500,
      checkItem: false,
      emptyDisplay: false,
    };
  }
  componentDidMount() {
    // const ItemFromSession = Object.values(sessionStorage).map((el) =>
    //   JSON.parse(Object(el))
    // );
    // this.setState({
    //   pickItem: ItemFromSession.map((el) => ({ ...el, count: 1 })),
    // });
    // http://3.17.134.84:8000/shopping
  }

  countPlus = (item, inDecrement, e) => {
    const plusValue = this.state.pickItem.map((el) =>
      el.name === item.name
        ? {
            ...el,
            price: (el.price * (el.count + 1)) / el.count,
            count: el.count + inDecrement,
          }
        : el
    );

    if (inDecrement === +1) {
      if (item.count === 5) {
        alert("최대주문수량 5개");
        return;
      }
      this.setState(
        {
          pickItem: plusValue,
        },
        () => this.calculatePrice()
      );
    }
  };

  countMinus = (item, inDecrement) => {
    const minusValue = this.state.pickItem.map((el) =>
      el.name === item.name
        ? {
            ...el,
            price: Math.floor((el.price * (el.count - 1)) / el.count),
            count: el.count + inDecrement,
          }
        : el
    );

    if (inDecrement === -1) {
      if (item.count === 1) {
        return;
      }
      this.setState(
        {
          pickItem: minusValue,
        },
        () => this.calculatePrice()
      );
    }
  };

  checkItem = (item) => {
    const newPickItem = this.state.pickItem.map((el) =>
      el.name === item.name ? { ...el, active: true } : el
    );
    this.setState({
      pickItem: newPickItem,
    });
  };

  calculatePrice = () => {
    const sumPrice = this.state.pickItem
      .map((el) => el.price)
      .reduce((a, b) => a + b, 0);
    this.setState(
      {
        totalPrice: sumPrice,
      },
      () => this.shippingfeeDelete()
    );
  };

  shippingfeeDelete = () => {
    const { totalPrice } = this.state;
    this.setState({ shippingFee: totalPrice >= 50000 ? 0 : 2500 });
  };

  deleteList = (item) => {
    this.setState(
      {
        pickItem: this.state.pickItem.filter((el) => el.name !== item.name),
      },
      () => this.calculatePrice()
    );
    sessionStorage.removeItem(item.id);
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
          .reduce((formerPrice, latterPrice) => formerPrice + latterPrice, 0),
      },
      () => this.calculatePrice()
    );
  };

  sendPickedItem = (pickItem) => {
    fetch("URL", {
      method: "post",
      body: JSON.stringify({
        pickItem: pickItem.id,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
        }
      });
  };

  render() {
    const {
      state: {
        emptyDisplay,
        pickItem,
        totalPrice,
        onSearchSubmit,
        shippingFee,
      },
      clearList,
      deleteList,
      checkItem,
      deleteCheckedItem,
      countPlus,
      countMinus,
    } = this;
    return (
      <div className="Shoppingbag">
        <Nav />
        <section className="shoppingbagContainer">
          <span className="shoppingbagTitle">Shopping Bag</span>
          <section className="OrderdList">
            <span className={!emptyDisplay ? "hidden" : "ShoppingbagEmpty"}>
              장바구니에 담으신 상품이 없습니다.
            </span>
            <table className="orderdProductList">
              <ItemList
                pickedItem={pickItem}
                totalPrice={totalPrice}
                onSubmit={onSearchSubmit}
                clearList={clearList}
                deleteList={deleteList}
                checkItem={checkItem}
                countPlus={countPlus}
                countMinus={countMinus}
              />
            </table>
          </section>
          <section className="shoppingbagFooter">
            <div className="priceCalculatorWrapper">
              <div>
                <span>5만원 이상 결제 시 무료로 배송 받을 수 있습니다.</span>
                <div>
                  <span onClick={deleteCheckedItem}>선택한 상품 삭제하기</span>
                  <span onClick={clearList}>장바구니 비우기</span>
                </div>
              </div>
            </div>
            <div className="priceCalculatedWrapper">
              <div className="priceCalculated">
                <ul>
                  <li>
                    <span>주문금액</span>
                    <span>{Math.floor(totalPrice).toLocaleString()}원</span>
                  </li>
                  <li>
                    <span>배송비</span>
                    <span>{shippingFee.toLocaleString()}원</span>
                  </li>
                  <li className="sum">
                    <span>합계</span>
                    <span>
                      {Math.floor(totalPrice + shippingFee).toLocaleString()}원
                    </span>
                  </li>
                </ul>
              </div>
              <div className="orderButton">
                <Link className="totalOrderButton" to="/checkout">
                  전체 주문하기
                </Link>
                <div>
                  <Link onClick={() => this.sendPickedItem(pickItem)}>
                    선택 상품만 주문
                  </Link>
                  <Link to="/checkout" className="naverOrder"></Link>
                </div>
              </div>
            </div>
          </section>
        </section>
        <Footer />
      </div>
    );
  }
}
