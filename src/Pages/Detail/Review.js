import React, { Component } from 'react';
import CommentList from './CommentList'
import './Review.scss';
 
 
class Review extends Component {
    
    constructor(){
        super();
        this.state = {
            user:"김영*",
            text: "",
            replies:[{
                name:"",
                comment:""
            }],
            show: true,
            buttonName: "댓글을 작성해주세요",
            yesClicked: true,
            noClicked: false,
        };
    }   

    
    handleText = (e) => {
     this.setState({
        text: e.target.value
     });    
    }

    addText = (e) => {
       let arr = this.state.replies;
       arr.push({
           name: this.state.user,
           comment: this.state.text
       });
       this.setState({
           replies: arr,
           text: "",
       })
    }
    
    pressEnter=(e) =>{
        if(e.key ==="Enter" && this.state.text) {
            this.addText();
            e.target.value="";
        }
    }

    handleRemove=(num)=>{
        alert('이 댓글을 정말로 삭제하시겠습니까?')
        const{ replies } =this.state;
        const nextReply = replies.filter((text,index)=>{
            return index!== num;
        });
        this.setState({
            replies: nextReply,
        })
    }
   
    showAllComment =() =>{
        if(this.state.show){
            this.setState({
                show: false,
                buttonName: "댓글접기"
            })
            }else if (!this.state.show){
                this.setState({
                    show: true,
                    buttonName: "댓글을 작성해주세요"
                })
            }
        }
    
    handleYesButton = () => {
        const { yesClicked } = this.state;
        this.setState({ yesClicked: !yesClicked });
    }

    handleNoButton = () => {
        const{ noClicked } = this.state;
        this.setState({ noClicked: !noClicked});
    }
    

    render() {
        const disabled = this.state.text.length > 0;
        const{ img, content, user} = this.props
        return (
            <div className="Review">
                <li> 
                <div>
                    <ul>
                        <li className="commentContainer">
                            <div className="reviewContentsBox">
                                <div className="ratingWrapper">
                                    <div className="scoreCount">
                                    (<strong className="totalScore"> </strong>
                                        명 중
                                    <strong className="totalScore"> 0</strong>
                                        명이 이 리뷰에 도움이 된다고 선택 했습니다.)
                                    </div>
                                </div>
                                <div className="reviewContent">
                                {content}
                                </div>
                                { img !== "none" && <img src={img} />}
                                <div className="reviewFoot">
                                <a onClick={this.showAllComment}>{this.state.buttonName}</a>
                                <div className="titleDivider">|</div>
                                <div className="userQuestion">
                                    이 리뷰가 도움이 되었나요?
                                </div>
                                 <div className="buttonWrapper">
                                <button className="like">네</button>
                                <button className="dislike">아니요</button>
                            </div>
                            <div className="scoreWrapper">
                                <div className="arrow"></div>
                                <span>0</span>
                            </div>
                            </div>
                            <div className={this.state.show? "hiddenInput": "showInput"}>
                            <ul>
                                {this.state.replies.map((el,idx) => {
                                    return <CommentList key={idx} comment={el.comment} userName={el.name}  
                                    handleRemove={() => this.handleRemove(idx)}/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
                                })}
                            </ul>
                            <div className="inputWrapper">
                                <input placeholder="댓글을 등록해 주세요:)" 
                                onChange={this.handleText}
                                value={this.state.text}
                                onKeyPress={this.pressEnter}/>

                                <button onClick={this.addText}
                                disabled={disabled ? false : 
                                true}>등록</button>
                            </div>
                            </div>
                            </div>
                            <div className="writerBox">
                               <div className="writer">작성자</div> 
                               <div className="name">{user}</div>
                            </div>
                        </li>
                    </ul>
                </div>
              </li>
            </div>
        );
    }
}

export default Review;