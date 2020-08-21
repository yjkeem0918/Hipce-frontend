import React, { Component } from 'react'
import './ProductNav.scss'
import { Link } from 'react-router-dom';


export default class ProductNav extends Component {
    render() {
        return (
            <div className ="ProductNav">
                <Link to="/Main">
                    <img alt="ProductCategory" src ="https://hince.co.kr/assets/images/hince-category-lip.png" />
                    <span>Lip</span>
                </Link>
                <Link to="/List">
                    <img alt="ProductCategory" src ="https://hince.co.kr/assets/images/hince-category-eye.png" />
                    <span>Eye</span>
                </Link>
                <Link to="/List">
                    <img alt="ProductCategory" src ="https://hince.co.kr/assets/images/hince-category-cheek.png" />
                    <span>Cheek</span>
                </Link>
                <Link to="/List">
                    <img alt="ProductCategory" src ="https://hince.co.kr/assets/images/hince-category-nail.png" />
                    <span>Nail</span>
                </Link>
                <Link to="/Main">
                    <img alt="ProductCategory" src ="https://hince.co.kr/assets/images/hince-category-object-sm.png" />
                    <span>Object</span>
                </Link>
                <Link to="/List">
                    <img alt="ProductCategory" src ="https://hince.co.kr/assets/images/hince-category-edition.png" />
                    <span>Edition</span>
                </Link>
            </div>
        )
    }
}
