import React, { Component } from "react";
import "./MainChild3.scss";
class MainChild3 extends Component {
  render() {
    return (
      <div className="MainChild3">
        <div className="sectionLabel">03</div>
        <div className="sectionTitle">
          <span></span>
          <h1>Best Seller</h1>
          <p>가장 많은 사랑을 받고있는 힌스의 베스트셀러</p>
        </div>
        <div className="sectionProduct">
          <a href="/">트루 디멘션 래디언스 밤 클리어</a>
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

export default MainChild3;
