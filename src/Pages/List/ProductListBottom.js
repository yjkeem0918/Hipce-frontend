import React, { Component } from 'react'
import './ProductListBottom.scss'

export default class ProductListBottom extends Component {
    render() {
        return (
            <div className ="ProductListBottom">
                <a className ="Arrow"> </a>
                    <ul>
                        <li><a>1</a></li>
                        <li><a>2</a></li>
                    </ul>
                <a className ="Arrow"> </a>
            </div>
        )
    }
}
