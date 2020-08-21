import React, { Component } from "react";
import "./Sign.scss";

class Sign extends Component {
  render() {
    return (
      <div className="Sign">
        <div className="pageHeader">
          <div className="pageTitle">Sign In</div>
        </div>
        <div className="formBox">
          <form className="memberForm">
            <div className="inputWrapper">
              <input className="input" placeholder="아이디" />
            </div>
            <div className="inputWrapper">
              <input className="input" placeholder="비밀번호" />
            </div>
            <div className="signInButtonBox">
              <button className="signInButton">SIGN IN</button>
              <div className="forgotAccount">
                <div><a href="#">아이디 찾기</a></div>
                <div><a href="#">비밀번호 찾기</a></div>
              </div>
            </div>
            <div className="signInMenu">
              <div className="descriptionBox">
                <p class="description">아직 회원이 아니신가요?
                  <br>
                  </br>
                가입 후 쿠폰 및 포인트 적립 등의 다양한 헤택을 받아보세요.
                </p>
              </div>
              <button className="signUpButton">회원가입</button>
              <div className="descriptionBox">
                <p class="description">SNS 계정으로 가입하고 로그인 할 수 있습니다.</p>
              </div>
              <div className="socialSignIn">
                <div className="facebook" alt="facebook">
                  <img src="Images/social-facebook.png" alt="facebook"/>
                </div>
                <div className="naver">
                  <img src="Images/social-naver.png" alt="naver"/>
                </div>
                <div className="kakaotalk">
                  <img src="images/social-kakao.png" alt="kakaotalk"/>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Sign;