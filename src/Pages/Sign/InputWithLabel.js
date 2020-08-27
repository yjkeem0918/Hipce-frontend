import React, { Component } from "react";
import "./InputWithLabel.scss";

class InputWithLabel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  render() {
    const { getValue, name, label, isValid, message, description } = this.props;
    return (
      <div className="InputWithLabel">
        <div className="formLabel">
          <div>
            {label}
            <span className="requiredMark">*</span>
          </div>
        </div>
        <div className="inputBox">
          <input
            type="text"
            name={name}
            onChange={getValue}
            type={name.includes("password") ? "password" : ""}
          ></input>
          <div className="descriptionBox">
            <div className="description">
              {description}
              <div className="description2">{!isValid && message}</div>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InputWithLabel;
