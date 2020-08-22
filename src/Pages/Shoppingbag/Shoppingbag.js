import React, { Component } from 'react'
import {Link} from'react-router-dom'
import '../../Styles/common.scss'
import './Shoppingbag.scss'
import '../../Styles/reset.scss'

export default class Shoppingbag extends Component {
    render() {
        return (
            <div className = "Shoppingbag">
                <span className = "ShoppingbagTitle">Shopping Bag</span>
                <section className = "OrderdList">
                    <span className = "ShoppingbagEmpty">장바구니에 담으신 상품이 없습니다.</span>
                    <table className = "OrderdProductList">
                        <tr>
                            <td className = "pickItem">
                                <div className = "pickItemPicture">
                                    <input type = "checkbox" id = "checkbox"/>
                                    <label for = "checkbox"></label>
                                    <img alt = "productImage" src = "https://hince.co.kr/web/product/tiny/20200617/b4b788b34fdd1c711ee75bf74a8096a6.jpg" />
                                    <span className = "productName">무드인핸서 리퀴드 마뜨 오운 스킨</span>
                                </div>
                                <div className = "pickItemCount">
                                    <div className = "count">
                                        <Link to = "/List">-</Link>
                                        <span>1</span>
                                        <Link to = "/List">+</Link>
                                    </div>
                                    <div className = "eachPrice">19,000원</div>
                                    <button>X</button>
                                </div>
                            </td>
                        </tr>
                    </table>
                    </section>
                <section className = "ShoppingbagFooter">
                    <div className = "PriceCalculatorWrapper">
                        <div>
                            <span>5만원 이상 결제 시 무료로 배송 받을 수 있습니다.</span>
                            <div>
                                <Link to = "/List">선택한 상품 삭제하기</Link>
                                <Link to = "/List">장바구니 비우기</Link>
                            </div>
                        </div>
                    </div>     
                    <div className = "PriceCalculatedWrapper">
                        <div className = "PriceCalculated">
                            <ul>
                                <li>
                                    <span>주문금액</span>
                                    <span className = "CalculatedPrice">5,000원</span>
                                </li>
                                <li>
                                    <span>배송비</span>
                                    <span className = "ShippingFee">5,000원</span>
                                </li>
                                <li className = "sum">
                                    <span >합계</span>
                                    <span className = "ShippingFee">10,000원</span>
                                </li>
                            </ul>
                        </div>
                        <div className = "OrderButton">
                            <Link className = "totalOrderButton" to = "/Main">전체 주문하기</Link>
                            <div>
                                <Link to = "/List">선택 상품만 주문</Link>
                                <Link to = "/List" className = "NaverOrder"></Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
