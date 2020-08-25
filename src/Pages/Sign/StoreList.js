import React, { Component } from "react";

class StoreList extends Component {
  render() {
    return (
      <div className="StoreList">
        <div className="StoreWrapper">
          <div className="searchBarBox">
            <input
              type="text"
              className="storeSearchInput"
              placeholder="매장명 또는 지역명으로 가까운 곳을 찾으세요."
            ></input>
          </div>
          <div className="tabHeader">
            <div className="storeName">{this.props.name}</div>
            <span>{this.props.info}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default StoreList;
