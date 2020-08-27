import React, { Component } from 'react';
import "./ImgBox.scss";

class ImgBox extends Component {
  render() {
    return (
      <div className="ImgBox">
        <img id={`slide${this.props.index}`} src={this.props.src} />
      </div>
    );
  }
}

export default ImgBox;