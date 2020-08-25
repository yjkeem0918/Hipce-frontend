import React, { Component } from 'react'
import './ProductListBottom.scss'

export default class ProductListBottom extends Component {
    render() {
        return (
            <div className = "productListBottom">
                <a className = "arrowLeft"> </a>
                    <ul>
                        <li className = "arrowList"><a>1</a></li>
                        <li className = "arrowList"><a>2</a></li>
                    </ul>
                <a className = "arrowRight"> </a>
            </div>
        )
    }
}
