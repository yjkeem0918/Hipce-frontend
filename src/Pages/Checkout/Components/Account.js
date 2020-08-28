import React, { Component } from 'react';
import "./Account.scss";

class Account extends Component {
  render() {
    return (
      <>
        <div className="sendToWhom">
          <label>입금자명</label>
          <input></input>
        </div>
        <div className="sendToBank">
          <label>입금은행</label>
          <select>
            <option>:::선택해 주세요.:::</option>
            <option>국민은행:929001-01-357649 주식회사 비바웨이브</option>
            <option>국민은행:189-910038-52304 주식회사 비바웨이브</option>
          </select>
        </div>
        <div className="cashReceipt">
          <label>현금영수증 신청</label>
          <input type="radio" id="receiptRegister" name="cashReceipt"/>
          <label for="receiptRegister">
            <span></span>현금영수증 신청
          </label>
          <input type="radio" id="notRegister" name="cashReceipt"/>
          <label for="notRegister">
            <span></span>신청 안함
          </label>
        </div>
      </>
    );
  }
}

export default Account;