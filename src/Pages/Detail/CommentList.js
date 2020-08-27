import React, { Component } from "react";
import "./CommentList.scss";

class CommentList extends Component {
    render() {
        const{comment, userName, handleRemove} =this.props
        return (
            <div className="CommentList">
                 <li style={{display: comment.length > 0? "flex" : "none"}}>
                    <div className="commentBox">
                        <div className="commentWriter">{userName}</div>
                        <div className="comment">{comment}</div>
                    </div>
                    <div className="commentButtonBox">
                        <button className="delete" onClick={handleRemove}>삭제</button>
                    </div>
                </li>
            </div>
        );
    }
}

export default CommentList;
