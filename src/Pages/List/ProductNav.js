import React, { Component } from 'react'
import './ProductNav.scss'

export default class ProductNav extends Component {
    render() {
        return (
            <div className ="ProductNav">
                <a href ="">
                    <img src ="https://hince.co.kr/assets/images/hince-category-lip.png" />
                    <span>Lip</span>
                </a>
                <a href ="">
                    <img src ="https://hince.co.kr/assets/images/hince-category-eye.png" />
                    <span>Eye</span>
                </a>
                <a href ="">
                    <img src ="https://hince.co.kr/assets/images/hince-category-cheek.png" />
                    <span>Cheek</span>
                </a>
                <a href ="">
                    <img src ="https://hince.co.kr/assets/images/hince-category-nail.png" />
                    <span>Nail</span>
                </a>
                <a href ="">
                    <img src ="https://hince.co.kr/assets/images/hince-category-object-sm.png" />
                    <span>Object</span>
                </a>
                <a href ="">
                    <img src ="https://hince.co.kr/assets/images/hince-category-edition.png" />
                    <span>Edition</span>
                </a>
            </div>
        )
    }
}
