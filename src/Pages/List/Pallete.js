import React, { Component } from 'react'

export default class Pallete extends Component {
    render() {
        return (
            <div>
                    <li id={index} style = {{backgroundColor: this.state.clickColor}}>
                        <button id = {this.state.buttonId} style={{backgroundColor: color}} onClick ={this.palleteButtonKeep}>
                        </button>
                    </li>)
            </div>
        )
    }
}
