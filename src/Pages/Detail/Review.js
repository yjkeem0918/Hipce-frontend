import React, { Component } from 'react';
import CommentList from './CommentList'
import Showmore from './Showmore'
import CountLike from './CountLike';
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
            buttonName: "댓글을 작성해주세요",
            show: true,
            totalScore: 0,
            score: 0,
        };
    }  
    // num=0  
    
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
        const nextReply = replies.filter((text)=>{
            return text.num!== num;
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
        this.setState({
            
        })
    }
     
    

    render() {
        const disabled = this.state.text.length > 0;
        return (
            <div className="Review">
                <li> 
                <div>
                    <ul>
                        <li className="commentContainer">
                            <div className="reviewContentsBox">
                                <div className="ratingWrapper">
                                    <div className="starRating">
                                        <span className="star"></span>
                                        <span className="star"></span>
                                        <span className="star"></span>
                                        <span className="star"></span>
                                        <span className="star"></span>
                                    </div>
                                    <div className="goodRating">-아주 좋아요</div>
                                    <div className="scoreCount">
                                    (<strong className="totalScore">{this.state.totalScore}</strong>
                                        명 중
                                    <strong className="totalScore">{this.state.score}</strong>
                                        명이 이 리뷰에 도움이 된다고 선택 했습니다.)
                                    </div>
                                </div>
                                <div className="reviewContent">
                                {this.props.content}
                                {/* 힌스 디자인에 반해서 리뷰 찾아보다가 한번 사봤어요.
                                <br />
                                원체 쨍한 색감은 안받는 편이라 얼루어먼트 구매했고, 생각대로 너무 예쁜 색상이에요. 단품으로 발라도 예쁘고, 다른 색상이랑 섞어서 발라도 무난하게 섞여드는 색상이라 활용 잘 할 것 같네요. 
                                <br />
                                <br />
                                디자인은 말할 것 없이 곡선, 색감 다 마음에 들고, 패키징도 예뻐서 박스를 못 버리고 있네요.
                                <br /> 
                                <br />
                                예쁘게 잘 사용하겠습니다:-) */}
                                </div>
                                {/* <img src="./Images/review.jpg" /> */}
                                <div className="reviewFoot">
                                <a onClick={this.showAllComment}>{this.state.buttonName}</a>
                                <div className="titleDivider">|</div>
                                <div className="userQuestion">
                                    이 리뷰가 도움이 되었나요?
                                </div>
                                 {/* <CountLike handleYesButton={this.handleYesButton}
                                 handleNoButton={this.handleNoButton}/> */}
                                 <div className="buttonWrapper">
                                <button className="like" onClick={this.handleYesButton}>네</button>
                                <button className="dislike" onClick={this.handleNoButton}>아니요</button>
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
                                    handleRemove={() => this.handleRemove(el.num)}/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
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
                               <div className="name">{this.props.user}</div>
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