import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./DetailMain.scss";
import Color from "./Color";

class DetailMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      totalPrice: 19000,
      colorList: [
        { title: "얼루어먼트", bgc: "#C48490" },
        { title: "오운 스킨", bgc: "#E8927C" },
        { title: "포인트 오브 뷰", bgc: "#E03C31" },
        { title: "언체인드", bgc: "#EBA0A5" },
        { title: "해치 아웃", bgc: "#E3785E" },
        { title: "파워하우스", bgc: "#DF4661" },
        { title: "스탠스", bgc: "#BE3A34" },
        { title: "뉴 퍼스펙티브", bgc: "#C74d66" },
        { title: "오픈 도어", bgc: "#D05A57" },
        { title: "풀 크레딧", bgc: "#BA0C2F" },
      ],
    };
  }

  plusOne = () => {
    if (this.state.count >= 5) {
      alert("최대 주문수량은 5개 입니다.");
      return;
    }
    this.setState({
      count: this.state.count + 1,
      totalPrice: this.state.totalPrice + 19000,
    });
  };

  minusOne = () => {
    if (this.state.count <= 1) {
      alert("최소 주문수량은 1개 입니다");
      return;
    }
    this.setState({
      count: this.state.count - 1,
      totalPrice: this.state.totalPrice - 19000,
    });
  };

  render() {
    return (
      <div className="DetailMain">
        <div className="mainContainer">
          <div className="detail_mainImg">
            <img src="Images/detail-main.jpg" alt="main Image" />
          </div>
          <div className="productInfo">
            <div className="productName">
              <span>무드인핸서 리퀴드 마뜨 얼루어먼트</span>
            </div>
            <div className="productElement">
              <div className="productPrice">
                <div className="nameBox">
                  <span className="detailName">판매가</span>
                </div>
                <span className="price">19,000원</span>
              </div>
              <div className="productNumBox">
                <span className="detailName">수량</span>
                <div className="numWrapper">
                  <button className="minus" onClick={this.minusOne}>
                    -
                  </button>
                  <button className="plus" onClick={this.plusOne}>
                    +
                  </button>
                  <input value={this.state.count} />
                </div>
              </div>
              <div className="productColor ">
                <span className="detailName">컬러</span>
                <ul className={`colorSet active-color-${this.state.nowidx}`}>
                  {this.state.colorList.map((obj, idx) => (
                    <Color
                      name={obj.title}
                      bgc={obj.bgc}
                      key={this.state.colorList.title}
                    />
                  ))}
                </ul>
              </div>
            </div>
            <div classNaem="buyingBox">
              <div className="totalPrice">
                <span className="priceTitle">금액</span>
                <span className="total">
                  {this.state.totalPrice}원 ({this.state.count}개)
                </span>
              </div>
              <div className="buttonBox">
                <span>
                  <button className="cartBtn"></button>
                </span>
                <button className="buyBtn">BUY NOW</button>
              </div>
              <div className="anotherPay">
                <button></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailMain;
