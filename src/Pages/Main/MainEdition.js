import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./MainEdition.scss";

class MainEdition extends Component {
  render() {
    return (
      <div className="MainEdition">
        <img src="http://hince.co.kr/images/main/section/19-01-05-edition.jpg"></img>
        <div className="sectionLabel">04</div>
        <div className="sectionTitle">
          <span></span>
          <h1>Edition</h1>
          <p>리미티드 에디션으로 만나는 무드인핸서 마뜨 미니 컬렉션</p>
        </div>
        <div className="sectionBottom">
          <Link to="/List"></Link>
        </div>
      </div>
    );
  }
}

export default MainEdition;
