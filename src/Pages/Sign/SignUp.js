import React, { Component } from "react";
import Nav from "../../Components/Nav";
import InputWithLabel from "./InputWithLabel";
import Terms from "./Terms";
import Footer from "../../Components/Footer";
import "./SignUp.scss";

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
      validation: { id: "initial", pw: "initial" },
      mobile1: "",
      mobile2: "",
    };
  }

  handleMobile = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log("mobile");
  };

  getInputValue = (label, value) => {
    const { inputValue } = this.state;
    console.log("pw", label);

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
  validationHandler = (inputValue) => {
    const { validation } = this.state;
    if (inputValue.id.length > 2) {
      this.setState({ validation: { ...this.state.validation, id: true } });
    } else if (inputValue.id === "") {
      this.setState({
        validation: { ...this.state.validation, id: "initial" },
      });
    } else if (inputValue.id.length < 3) {
      this.setState({ validation: { ...this.state.validation, id: false } });
    }
  };
  componentDidUpdate(prevProps, prevState) {
    console.log("prevState", prevState);
    if (prevState.inputValue.id !== this.state.inputValue.id) {
      this.validationHandler(this.state.inputValue);
    }
  }
  render() {
    console.log(this.state.inputValue);
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
              onChange={this.getInputValue}
              option={{
                label: "아이디",
                description: "영문 소문자와 숫자를 조합하여 4-16자",
                validation: {
                  true: "사용 가능한 아이디입니다.",
                  false: "사용 불가능한 아이디 입니다.",
                  initial: "아이디를 입력하세요.",
                },
                isPassed: this.state.validation.id,
              }}
            ></InputWithLabel>
            <InputWithLabel
              onChange={this.getInputValue}
              option={{
                label: "비밀번호",
                description:
                  "영문 대소문자, 숫자, 특수문자 중 2가지 이상을 조합하여 10-16자",
                validation: {
                  true: "사용 가능한 아이디입니다.",
                  false: "사용 불가능한 아이디 입니다.",
                  initial: "아이디를 입력하세요.",
                },
                isPassed: true,
              }}
            ></InputWithLabel>
            <InputWithLabel
              onChange={this.getInputValue}
              option={{
                label: "비밀번호 확인",
                isPassed: false,
                validation: {
                  true: "사용 가능한 아이디입니다.",
                  false: "사용 불가능한 아이디 입니다.",
                  initial: "아이디를 입력하세요.",
                },
              }}
            ></InputWithLabel>
            <InputWithLabel
              onChange={this.getInputValue}
              option={{
                label: "이름",
                validation: {
                  true: "사용 가능한 아이디입니다.",
                  false: "사용 불가능한 아이디 입니다.",
                  initial: "아이디를 입력하세요.",
                },
                isPassed: false,
              }}
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
        <Footer />
      </div>
    );
  }
}

export default SignUp;
