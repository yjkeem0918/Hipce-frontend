import React, { Component } from "react";
import "./MainChild2.scss";

class MainChild2 extends Component {
  render() {
    return (
      <div className="MainChild2">
        <div className="sectionLabel">02</div>
        <div className="sectionTitle">
          <span></span>
          <h1>New Product</h1>
          <p>한스의 신상품을 가장 먼저 만나보세요.</p>
        </div>
        <div className="sectionProduct">
          <a href="/">뉴 뎁스 아이섀도우 팔레트 젠틀 앤 펌</a>
        </div>
        <div className="sectionCarousel">
          <ul>
            <li>
              <button>1</button>
            </li>
            <li>
              <button>2</button>
            </li>
            <li>
              <button>3</button>
            </li>
            <li>
              <button>4</button>
            </li>
          </ul>
        </div>
        <div className="sectionBottom">
          <a to="/List"></a>
          <a></a>
        </div>
      </div>
    );
  }
}

export default MainChild2;
