import React, { Component } from 'react';
import './ReviewFrame.scss'

class ReviewFrame extends Component {
    render() {
        return (
            <div className="ReviewFrame">
                <div className="title">
                    <h3>리뷰 보기</h3>
                </div>
                <header>
                    <strong>평점순</strong>
                </header> 
            </div>
        );
    }
}

export default ReviewFrame;