import React, { Component } from "react";
import "./SignUp.scss";
import InputWithLabel from "./InputWithLabel";
import Terms from "./Terms";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: {
        id: "",
        pw: "",
        checkpw: "",
        name: "",
        email: "",
      },
      mobile1: "",
      mobile2: "",
    };
  }

  handleMobile = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    // console.log("mobile");
  };

  getInputValue = (label, value) => {
    const { inputValue } = this.state;
    // console.log("pw", label);

    switch (label) {
      case "아이디":
        this.setState({ inputValue: { ...inputValue, id: value } });
        break;
      case "비밀번호":
        this.setState({ inputValue: { ...inputValue, pw: value } });
        break;
      case "비밀번호 확인":
        this.setState({ inputValue: { ...inputValue, checkpw: value } });
        break;
      case "이름":
        this.setState({ inputValue: { ...inputValue, name: value } });
        break;
      default:
        break;
      case "이메일":
        this.setState({ inputValue: { ...inputValue, email: value } });
        break;
    }
  };

  render() {
    // console.log(this.state.inputValue);
    return (
      <div className="SignUp">
        <div className="pageHeader">
          <div className="pageTitle">Sign Up</div>
        </div>
        <div className="userInfoWrapper">
          <div className="formBox">
            <div className="formTitleBox">
              <h3 className="formTitle">회원정보</h3>
            </div>
            <InputWithLabel
              onChange={this.getInputValue}
              option={{
                label: "아이디",
                description: "영문 소문자와 숫자를 조합하여 4-16자",
              }}
            ></InputWithLabel>
            <InputWithLabel
              onChange={this.getInputValue}
              option={{
                label: "비밀번호",
                description:
                  "영문 대소문자, 숫자, 특수문자 중 2가지 이상을 조합하여 10-16자",
              }}
            ></InputWithLabel>
            <InputWithLabel
              onChange={this.getInputValue}
              option={{ label: "비밀번호 확인" }}
            ></InputWithLabel>
            <InputWithLabel
              onChange={this.getInputValue}
              option={{ label: "이름" }}
            ></InputWithLabel>
            <div className="phoneNumberBox">
              <div className="phoneNumberLabel">
                <div className="phoneLabel">휴대전화</div>
                <span className="requiredMark">*</span>
              </div>
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
                name="mobile1"
                onChange={this.handleMobile}
                value={this.state.input1}
                className="phone2"
                type="text"
                maxlength="4"
              />
              <div className="hypen">-</div>
              <input
                name="mobile2"
                onChange={this.handleMobile}
                value={this.state.input2}
                className="phone3"
                type="text"
                maxlength="4"
              />
            </div>
            <InputWithLabel
              onChange={this.getInputValue}
              option={{ label: "이메일" }}
            ></InputWithLabel>
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
                  type="text"
                  className="YYYY"
                  placeholder="YYYY"
                  maxlength="4"
                />
                <input className="MMDD" placeholder="MM" maxlength="2" />
                <input className="MMDD" placeholder="DD" maxlength="2" />
              </div>
            </div>
          </div>
          <Terms />
          <div className="signUpButtonBox">
            <button className="signUpButton">회원 가입하기</button>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
