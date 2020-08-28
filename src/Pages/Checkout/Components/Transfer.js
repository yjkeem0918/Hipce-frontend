import React, { Component } from "react";
import "./Transfer.scss";

class Transfer extends Component {
  render() {
    return (
      <>
        <div className="transferToWhom">
          <label>예금주명</label>
          <input></input>
        </div>
        <div className="cashReceipt">
          <label>현금영수증 신청</label>
          <input type="radio" id="receiptRegister" name="cashReceipt" />
          <label for="receiptRegister">
            <span></span>현금영수증 신청
          </label>
          <input type="radio" id="notRegister" name="cashReceipt" />
          <label for="notRegister">
            <span></span>신청 안함
          </label>
        </div>
      </>
    );
  }
}

export default Transfer;
