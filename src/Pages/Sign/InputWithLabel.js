import React, {Component} from "react"
import "./InputWithLabel.scss"

class InputWithLabel extends Component {
  render() {
    return (
    <div className="idBox">
      <div className="formLabel">
        <div>{this.props.option.label}
          <span className="requiredMark">*</span>
        </div>
      </div>
      <div className="inputBox">
        <input type="text" onChange={(e)=>{this.props.onChange(this.props.option.label,e.target.value)}}></input>
        <div className="description">
          {this.props.option.description}
        </div>
      </div>
    </div>
  )
  }
}

  export default InputWithLabel
