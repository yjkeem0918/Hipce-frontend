import React, { Component } from 'react';
import './Color.scss';
 
class Color extends Component {
    render() {
        return (
            <div className="ColorList">
                <a href="#"><li title={this.props.name} style={{backgroundColor: this.props.bgc }}></li></a>
            </div>
        );
    }
}

export default Color;
