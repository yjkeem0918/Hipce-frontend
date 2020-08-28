import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import "./ImgBox.scss";

class ImgBox extends Component {
  goToDetail = (id) => {
    this.props.history.push(`/detail/${id}`)
  }

  render() {
    return (
      <div className="ImgBox">
        <img onClick={()=>this.goToDetail(this.props.id)} id={`slide${this.props.index}`} src={this.props.src} />
      </div>
    );
  }
}

export default withRouter(ImgBox);