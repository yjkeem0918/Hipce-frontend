import React, { Component } from "react";
import "./Login.scss";

class Sign extends Component {
  constructor() {
    super();

    this.state = {
      id: "",
      pw: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleButton = (e) => {
    if (!this.state.id && !this.state.pw) {
      alert("아이디 입력값은 필수입니다.");
    } else if (this.state.id.length >= 1 && !this.state.pw) {
      alert("패스워드 항목은 필수 입력값입니다.");
    } else if (this.state.pw.length >= 1 && !this.state.id) {
      alert("아이디 항목은 필수 입력값입니다.");
    } else if (this.state.pw.length < 4 && this.state.id) {
      alert("패스워드 항목이 4자(개) 이상으로 해주십시오.");
    }
  };

  render() {
    return (
      <div className="Sign">
        <div className="pageHeader">
          <div className="pageTitle">Sign In</div>
        </div>
        <div className="formBox">
          <form className="memberForm">
            <div className="inputWrapper">
              <input
                className="input"
                placeholder="아이디"
                name="id"
                onChange={this.handleChange}
                autocomplete="off"
              />
            </div>
            <div className="inputWrapper">
              <input
                className="input"
                placeholder="비밀번호"
                name="pw"
                onChange={this.handleChange}
                autocomplete="off"
              />
            </div>
            <div className="signInButtonBox">
              <button onClick={this.handleButton} className="signInButton">
                SIGN IN
              </button>
              <div className="forgotAccount">
                <div>
                  <a href="#">아이디 찾기</a>
                </div>
                <div>
                  <a href="#">비밀번호 찾기</a>
                </div>
              </div>
            </div>
            <div className="signInMenu">
              <div className="descriptionBox">
                <p className="description">
                  아직 회원이 아니신가요?
                  <br></br>
                  가입 후 쿠폰 및 포인트 적립 등의 다양한 헤택을 받아보세요.
                </p>
              </div>
              <button className="signUpButton">회원가입</button>
              <div className="descriptionBox">
                <p className="description">
                  SNS 계정으로 가입하고 로그인 할 수 있습니다.
                </p>
              </div>
              <div className="socialSignIn">
                <div className="facebook">
                  <img src="Images/social-facebook.png" alt="facebook" />
                </div>
                <div className="naver">
                  <img src="Images/social-naver.png" alt="naver" />
                </div>
                <div className="kakaotalk">
                  <img src="images/social-kakao.png" alt="kakaotalk" />
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
