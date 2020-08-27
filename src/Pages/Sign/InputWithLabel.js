import React, { Component } from "react";
import "./InputWithLabel.scss";

class InputWithLabel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { label, description, validation, isPassed } = this.props.option;
    return (
      <div className="idBox">
        <div className="formLabel">
          <div>
            {label}
            <span className="requiredMark">*</span>
          </div>
        </div>
        <div className="inputBox">
          <input
            type="text"
            onChange={(e) => {
              this.props.onChange(label, e.target.value);
            }}
          ></input>
          <div className="descriptionBox">
            <div className="description">
              {description}
              <div className="description2">
                {validation && isPassed === "initial" ? validation.initial : ""}
              </div>
              <span onChange></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InputWithLabel;
