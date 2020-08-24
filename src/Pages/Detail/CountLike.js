import React, { Component } from 'react';
import './CountLike.scss'

class CountLike extends Component {
    state={
        yes : '0'
    }
     
    isYes = ()=>{
        this.setState({
            yes: true
        })
    }
    
    
    render() {
        return (
            <div className="CountLike">
                <div className="buttonWrapper">
                    <button className="like" onClick={this.props.handleYesButton}>네</button>
                    <button className="dislike" onClick={this.props.handleNoButton}>아니요</button>
                </div>
                <div className="scoreWrapper">
                    <div className="arrow"></div>
                    <span>0</span>
                </div>
            </div>
        );
    }
}

export default CountLike;

//필요없는 컴포넌트