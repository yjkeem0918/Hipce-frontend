import React, { Component } from 'react';
import "./Virtual.scss";

class Virtual extends Component {
  render() {
    return (
      <div className="cashReceipt">
        <label>현금영수증 신청</label>
        <input type="radio" id="receiptRegister" name="cashRecipht"/>
        <label for="receiptRegister">
          <span></span>현금영수증 신청
        </label>
        <input type="radio" id="notRegister" name="cashRecipht"/>
        <label for="notRegister">
          <span></span>신청 안함
        </label>
      </div>
    );
  }
}

export default Virtual;