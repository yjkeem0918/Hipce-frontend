import React, { Component } from "react";
import "./InputWithLabel.scss";

class InputWithLabel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="idBox">
        <div className="formLabel">
          <div>
            {this.props.option.label}
            <span className="requiredMark">*</span>
          </div>
        </div>
        <div className="inputBox">
          <input
            type="text"
            onChange={(e) => {
              this.props.onChange(this.props.option.label, e.target.value);
            }}
          ></input>
          <div className="descriptionBox">
            <div className="description">{this.props.option.description}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default InputWithLabel;
