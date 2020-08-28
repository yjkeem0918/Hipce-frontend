import React, { Component } from "react";
import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="footerTop">
          <div className="footerContact">
            <div className="footerContactDetail">
              <h3 className>CUSTOMER CENTER</h3>
              <ul>
                <li className="csNumber">1644-7161</li>
                <li>11:00 - 17:00 (Lunch time 13:00 - 14:30)</li>
                <li>토,일요일 및 공휴일 휴무</li>
              </ul>
            </div>
            <div className="footerContactDetail">
              <div>
                <h3>BANK INFO</h3>
                <ul>
                  <li>국민 929001-01-357649 / KEB하나 189-910038-52304</li>
                  <li>(주식회사 비바웨이브)</li>
                </ul>
              </div>
              <div>
                <h3>DELIVERY</h3>
                <ul>
                  <li>배송조회</li>
                  <li>CJ대한통운 (1588-1255) 서울 영등포구 양평로21다길 14</li>
                </ul>
              </div>
            </div>
            <div className="footerContactDetail">
              <div>
                <h3>PARTNERSHIP</h3>
                <ul>
                  <li>
                    도매/제휴문의 (Wholesale/Partnership) sales@vivawave.co.kr
                  </li>
                  <li>해외수출문의 (Global export) global@vivawave.co.kr</li>
                </ul>
              </div>
              <div>
                <h3>FLAGSHIP STORE</h3>
                <ul>
                  <li>힌스 아틀리에 성수점</li>
                  <li>매일 12:00~20:00</li>
                  <li>서울시 성동구 왕십리로 14길 22-2</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footerMenu">
            <div className="footerMenuDetail">
              <h3>SERVICE</h3>
              <ul>
                <li>공지사항</li>
                <li>자주찾는질문</li>
                <li>문의하기</li>
                <li>이벤트</li>
              </ul>
            </div>
            <div className="footerMenuDetail">
              <h3>MY ACCOUNT</h3>
              <ul>
                <li>마이페이지</li>
                <li>주문내역</li>
                <li>회원등급 및 혜택</li>
                <li>로그인</li>
                <li>회원가입</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footerBottom">
          <div class="legalLinks">
            <ul>
              <li>ABOUT</li>
              <li>LOCATION</li>
              <li>TERMS OF USE</li>
              <li>HELP</li>
              <li>PRIVACY POLICY</li>
            </ul>
          </div>
          <div class="companyInfo">
            <ul>
              <li>VIVAWAVE Co., Ltd.</li>
              <li>CEO Heo Jaeseok</li>
              <li>
                (Seogyo-dong, Namoo Building) 3F, 41, Yanghwa-ro 7an-gil,
                Mapo-gu, Seoul, Republic of Korea
              </li>
              <li>
                Business Registration No: 632-88-00936 E-commerce Permit
                Registration No: 2019-SeoulMapo-1141
              </li>
            </ul>
            <ul>
              <li>Contact 1644-7161</li>
              <li>Fax 02-6008-2717</li>
              <li>
                Email <a href="/">cs@vivawave.co.kr</a>
              </li>
              <li>
                Personal Information Manager <a href="/">Heo Jaeseok</a>
              </li>
            </ul>
          </div>
          <div className="socialLinks">
            <ul>
              <li>
                <a href="/"></a>
              </li>
              <li>
                <a href="/"></a>
              </li>
              <li>
                <a href="/"></a>
              </li>
            </ul>
          </div>
          <div class="copyright">
            © 2019 VIVAWAVE Co., Ltd. All rights reserved.
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
