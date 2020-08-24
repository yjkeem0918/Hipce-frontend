import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./MainHinceAtelier.scss";

class MainHinceAtelier extends Component {
  render() {
    return (
      <div className="MainHinceAtelier">
        <img src="http://hince.co.kr/images/main/section/19-01-05-atelier.jpg" />
        <div className="sectionLabel">05</div>
        <div className="sectionTitle">
          <span></span>
          <h1>hince Atelier</h1>
          <p>힌스의 첫 공식 플래그십 스토어를 성수동에서 만나 보세요.</p>
        </div>
        <div className="sectionBottom">
          <Link to="/list"></Link>
        </div>
      </div>
    );
  }
}

export default MainHinceAtelier;
