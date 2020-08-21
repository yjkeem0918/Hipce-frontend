import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Product.scss'

export default class Product extends Component {
    render() {
        return (
            <li class = "Product">
                <section className ="productImage">
                    <img alt ="productImg" src = {this.props.imgsrc} />
                </section>
                <section className = "productBottom">
                        <div className ="productBottomValue">
                            <div><img src ="http://hince.co.kr/web/upload/custom_1.png" /></div>
                            <div>
                                <Link to ="/Main"><p>무드인핸서 리퀴드 마뜨 얼루어먼트</p></Link>
                                <img alt = "cartMark" src ="http://hince.co.kr/assets/images/hince-cart-icon.jpg"/>
                            </div>
                        </div>
                        <span>19,000원</span>       
                </section>
            </li>
        )
    }
}
