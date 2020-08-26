import React, { Component } from "react";

class StoreList extends Component {
  render() {
    return (
      <div className="StoreList">
        <div className="StoreWrapper">
          <div className="searchBarBox"></div>
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
