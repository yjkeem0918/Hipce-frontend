import React, { Component } from "react";
import Nav from "../../Components/Nav";
import Footer from "../../Components/Footer";
import "./Collection.scss";

class Collection extends Component {
  render() {
    return (
      <div className="Collection">
        <Nav />
        <header>
          <h1>Collection</h1>
        </header>
        <div className="collectionContainer">
          <div className="collectionBox">
            <a href="/list/category=lip" className="attitude">
              <h2>My Own Attitude.</h2>
              <p>
                나의 관점
                <br />올 어바웃 애티튜드 컬렉션
              </p>
            </a>
            <a href="/list/category=lip" className="glow">
              <h2>Glow from within.</h2>
              <p>
                섬세하게 차오르는 본연의 빛.
                <br />
                글로우 업 컬렉션
              </p>
            </a>
            <a href="/list/category=lip" className="depth">
              <h2>New Depth Inside You.</h2>
              <p>
                새로운 면모의 발견.
                <br />뉴 뎁스 컬렉션
              </p>
            </a>
            <a href="/list/category=lip" className="shine">
              <h2>Glow from within.</h2>
              <p>
                과장되지 않은, 지금 그대로의 당신을 더욱 빛나게 할<br />
                미러라이크 컬렉션
              </p>
            </a>
            <a href="/list/category=lip" className="unveil">
              <h2>Unveil Your True Self.</h2>
              <p>
                베일에 싸인 당신의 분위기를 발현시키는
                <br />
                무드 인핸서 마뜨
              </p>
            </a>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Collection;
