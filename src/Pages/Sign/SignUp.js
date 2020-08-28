import React, { Component } from "react";
import Nav from "../../Components/Nav";
import InputWithLabel from "./InputWithLabel";
import Terms from "./Terms";
import Footer from "../../Components/Footer";
import API from "../../config";
import "./SignUp.scss";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      account: "",
      password: "",
      checkpassword: "",
      name: "",
      email: "",
      phone: ["010", "", ""],
      isIdValid: false,
      birthday: ["", "", ""],
    };
  }

  handleMobile = (e, idx) => {
    const { name, value } = e.target;
    const result = this.state.phone;
    result[idx] = value;
    this.setState({ [name]: result });
  };

  handleMobile2 = (e, idx) => {
    const { name, value } = e.target;
    const result = this.state.birthday;
    result[idx] = value;
    this.setState({ [name]: result });
  };

  getInputValue = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  componentDidUpdate(prevProps, prevState) {
    const { account } = this.state;
    if (prevState.account !== this.state.account) {
      this.setState({
        isIdValid: account === "" ? false : true,
      });
    }
  }

  handleSignUp = () => {
    fetch(`${API}/users/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        account: this.state.account,
        password: this.state.password,
        name: this.state.name,
        phone: this.state.phone.map((el) => el).join(""),
        email: this.state.email,
        birthday: this.state.birthday.join("-"),
        sms_marketing_agree: false,
        email_marketing_agree: false,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.MESSAGE === "SUCCESS") {
          alert("회원가입이 완료되었습니다.");
          this.props.history.push("/login");
          window.location.reload();
        } else {
          alert("회원가입에 실패하였습니다.");
        }
      });
  };

  render() {
    return (
      <div className="SignUp">
        <Nav />
        <div className="pageHeader">
          <div className="pageTitle">Sign Up</div>
        </div>
        <div className="userInfoWrapper">
          <div className="formBox">
            <div className="formTitleBox">
              <h3 className="formTitle">회원정보</h3>
            </div>
            <InputWithLabel
              getValue={this.getInputValue}
              name="account"
              label="아이디"
              isValid={this.state.isIdValid}
              message="아이디를 입력해주세요"
              description="영문 소문자와 숫자를 조합하여 4-16자"
            />
            <InputWithLabel
              getValue={this.getInputValue}
              name="password"
              label="비밀번호"
              description="영문 대소문자, 숫자, 특수문자 중 2가지 이상을 조합하여 10-16자"
            />
            <InputWithLabel
              getValue={this.getInputValue}
              name="checkpassword"
              label="비밀번호 확인"
            />
            <InputWithLabel
              getValue={this.getInputValue}
              name="name"
              label="이름"
            />
            <div className="phoneNumberBox">
              <div className="phoneNumberLabel">
                <div className="phoneLabel">휴대전화</div>
                <span className="requiredMark">*</span>
              </div>
              <div className="mobileBox">
                <select className="mobileNumber" size="1">
                  <option value="student" selected>
                    010
                  </option>
                  <option value="mobile">011</option>
                  <option value="mobile">016</option>
                  <option value="mobile">017</option>
                  <option value="mobile">018</option>
                  <option value="mobile">019</option>
                </select>
                <div className="hypen">-</div>
                <input
                  name="phone"
                  onChange={(e) => this.handleMobile(e, 1)}
                  value={this.state.input1}
                  className="phone2"
                  type="text"
                  maxlength="4"
                />
                <div className="hypen">-</div>
                <input
                  name="phone"
                  onChange={(e) => this.handleMobile(e, 2)}
                  value={this.state.input2}
                  className="phone3"
                  type="text"
                  maxlength="4"
                />
              </div>
            </div>
            <InputWithLabel
              name="email"
              label="이메일"
              getValue={this.getInputValue}
            />
          </div>
          <div className="formBox">
            <div className="formTitleBox">
              <h3 className="formTitle">선택항목</h3>
              <span className="birthdayDescription">
                생일을 입력하시면, 생일 축하 쿠폰을 선물로 보내드립니다.
              </span>
            </div>
            <div className="birthdayBox">
              <div className="birthdayLabel">
                <div className="birthday">생년월일</div>
              </div>
              <div className="birthdayInputBox">
                <input
                  onChange={(e) => this.handleMobile2(e, 0)}
                  name="birthday"
                  type="text"
                  className="YYYY"
                  placeholder="YYYY"
                  maxlength="4"
                />
                <input
                  onChange={(e) => this.handleMobile2(e, 1)}
                  className="MMDD"
                  placeholder="MM"
                  maxlength="2"
                  name="birthday"
                />
                <input
                  onChange={(e) => this.handleMobile2(e, 2)}
                  className="MMDD"
                  placeholder="DD"
                  maxlength="2"
                  name="birthday"
                />
              </div>
            </div>
          </div>
          <Terms />
          <div className="signUpButtonBox">
            <button onClick={this.handleSignUp} className="signUpButton">
              회원 가입하기
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default SignUp;
