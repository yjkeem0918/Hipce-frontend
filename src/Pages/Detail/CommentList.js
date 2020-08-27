import React, { Component } from "react";
import "./CommentList.scss";

class CommentList extends Component {
  render() {
    return (
      <div className="CommentList">
        <li
          style={{ display: this.props.comment.length > 0 ? "flex" : "none" }}
        >
          <div className="commentBox">
            <div className="commentWriter">{this.props.userName}</div>
            <div className="comment">{this.props.comment}</div>
          </div>
          <div className="commentButtonBox">
            <button className="delete" onClick={this.props.handleRemove}>
              삭제
            </button>
          </div>
        </li>
      </div>
    );
  }
}

export default CommentList;
