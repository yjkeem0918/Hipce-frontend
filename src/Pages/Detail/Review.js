import React, { Component } from 'react';
import './Review.scss';
 

class Review extends Component {
    constructor() {
        super();
        this.state ={
            num: "0",
        }
    }

    like = () =>{
        this.setState ({
            num: "+1",
        });
    }

    dis
    render() {
        return (
            <div className="Review">
                <div className="title">
                    <h3>리뷰 보기</h3>
                </div>
                <header>
                    <strong>평점순</strong>
                    &nbsp;리뷰 (
                    <span className="reviewCount">64</span>    
                    )
                </header>
                <div>
                    <ul>
                        <li id="1">
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
                                        (<strong className="totlaScore">1</strong>
                                        명 중
                                        <strong className="plusScore">1</strong>
                                        명이 이 리뷰에 도움이 된다고 선택 했습니다.)
                                    </div>
                                </div>
                                <div className="reviewContent">
                                힌스 디자인에 반해서 리뷰 찾아보다가 한번 사봤어요.
                                <br></br>
                                원체 쨍한 색감은 안받는 편이라 얼루어먼트 구매했고, 생각대로 너무 예쁜 색상이에요. 단품으로 발라도 예쁘고, 다른 색상이랑 섞어서 발라도 무난하게 섞여드는 색상이라 활용 잘 할 것 같네요. 
                                <br></br>
                                <br></br>
                                디자인은 말할 것 없이 곡선, 색감 다 마음에 들고, 패키징도 예뻐서 박스를 못 버리고 있네요.
                                <br></br>
                                <br></br>
                                예쁘게 잘 사용하겠습니다:-)
                                </div>
                                <div className="reviewFoot">
                                    <a href="#">리뷰 접기</a>
                                    <div className="titleDivider">|</div>
                                    <div className="userQuestion">
                                        이 리뷰가 도움이 되었나요?
                                    </div>
                                    <div className="buttonWrapper">
                                        <button className="like" onClick={this.like}>네</button>
                                        <button className="dislike" onClick={this.dislike}>아니요</button>
                                    </div>
                                    <div className="scoreWrapper">
                                        <div className="arrow"></div>
                                        <span>{this.state.num}</span>
                                    </div>
                                </div>
                                <div className="arrowTop"></div>
                                <div className="hiddenInput">
                                  <div className="inputWrapper">
                                      <input placeholder="댓글을 등록해 주세요:)"></input>
                                      <button>등록</button>
                                  </div>
                                </div>
                            </div>
                            <div className="writerBox">
                               <div className="writer">작성자</div> 
                               <div className="name">강다*</div>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        );
    }
}

export default Review;