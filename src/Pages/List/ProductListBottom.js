import React, { Component } from 'react'
import './ProductListBottom.scss'

export default class ProductListBottom extends Component {
    render() {
        return (
            <div className ="ProductListBottom">
                <a className ="ArrowLeft"> </a>
                    <ul>
                        <li className= "ArrowList"><a>1</a></li>
                        <li className= "ArrowList"><a>2</a></li>
                    </ul>
                <a className ="ArrowRight"> </a>
            </div>
        )
    }
}
