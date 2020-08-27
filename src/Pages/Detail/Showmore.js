import React, { Component } from "react";
import "./Showmore.scss";
import CommentList from "./CommentList";

class Showmore extends Component {
  constructor() {
    super();
    this.state = {
      user: "김영*",
      text: "",
      replies: [
        {
          name: "",
          comment: "",
        },
      ],
    };
  }
  num = 0;

  handleText = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  addText = (e) => {
    let arr = this.state.replies;
    arr.push({
      name: this.state.user,
      comment: this.state.text,
    });
    this.setState({
      replies: arr,
      text: "",
    });
  };

  pressEnter = (e) => {
    if (e.key === "Enter" && this.state.text) {
      this.addText();
      e.target.value = "";
    }
  };

  handleRemove = (num) => {
    alert("이 댓글을 정말로 삭제하시겠습니까?");
    const { replies } = this.state;
    const nextReply = replies.filter((text) => {
      return text.num !== num;
    });
    this.setState({
      replies: nextReply,
    });
  };
  render() {
    const disabled = this.state.text.length > 0;

    return (
      <div className="Showmore">
        <div className="hiddenInput">
          <ul>
            {this.state.replies.map((el, idx) => {
              return (
                <CommentList
                  comment={el.comment}
                  userName={el.name}
                  handleRemove={() => this.handleRemove(el.num)}
                />
              );
            })}
          </ul>
          <div className="inputWrapper">
            <input
              placeholder="댓글을 등록해 주세요:)"
              onChange={this.handleText}
              value={this.state.text}
              onKeyPress={this.pressEnter}
            />

            <button onClick={this.addText} disabled={disabled ? false : true}>
              등록
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Showmore;
