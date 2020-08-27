import React, { Component } from "react";
import "./Card.scss";

class Card extends Component {
  render() {
    return (
      <>
        <div className="selectCard">
          <label>카드선택</label>
          <select>
            <option>선택해주세요.</option>
            <option>신한카드</option>
            <option>비씨카드</option>
            <option>우리카드</option>
            <option>KB국민카드</option>
            <option>롯데카드</option>
            <option>현대카드</option>
            <option>삼성카드</option>
            <option>NH카드</option>
            <option>하나카드</option>
            <option>씨티카드</option>
            <option>카카오뱅크</option>
            <option>광주카드</option>
            <option>전북카드</option>
          </select>
        </div>
        <div className="installmentPeriod">
          <label>할부기간</label>
          <div className="selectInstallment">
            <select disabled>
              <option>일시불</option>
              <option>2개월(무이자)</option>
              <option>3개월(무이자)</option>
              <option>4개월(무이자)</option>
              <option>5개월(무이자)</option>
              <option>6개월(무이자)</option>
            </select>
            <span>법인카드는 무이자 할부 적용이 되지 않습니다.</span>
          </div>
        </div>
      </>
    );
  }
}

export default Card;
