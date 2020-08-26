import React, { Component } from 'react';
import './ColorList.scss';
 
class ColorList extends Component {

    render() {
        return (
            <div className="ColorList"  >
                <a href={this.props.address}id={this.props.id}>
                    <li title={this.props.name} style={{backgroundColor: this.props.bgc}}>
                    </li>
                </a>
            </div>
        );
    }
}

export default ColorList;
 