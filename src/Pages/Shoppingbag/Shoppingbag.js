import React, { Component } from 'react'
import {Link} from'react-router-dom'
import Nav from '../../Components/Nav'
import Footer from '../../Components/Footer'
import '../../Styles/common.scss'
import './Shoppingbag.scss'
import '../../Styles/reset.scss'
import './ItemList'
import ItemList from './ItemList'

export default class Shoppingbag extends Component {
    constructor(props){
        super(props)

        this.state = {
            countNumber: {},
            pickItem : [...pickedItem],
            totalPrice: 0,
            realtotalPrice: null,
            shippingFee: 2500,
        }
    }
    
    componentDidMount(){
        // fetch.("URL")
        // .then(res => res.json())
        // .then(res =>this.setState({pickItem: res.map(el => el.sth)}))
        this.setFirstPrice()
    }

    setFirstPrice = ()=>{
        this.setState({realtotalPrice: this.state.pickItem.map(el => el.price).reduce((a,b)=> a+b, 0)})
    }

    onSearchSubmit=(totalPrice)=>{
        this.setState({realtotalPrice: totalPrice})
        if(totalPrice >= 50000){
            this.setState({shippingFee: 0})
        }else if(totalPrice < 50000){
            this.setState({shippingFee: 5000})
        }
    }
    clearList = ()=>{
        console.log(this.state.pickItem)
        this.setState({pickItem: <span>what</span>})
        console.log(this.state.pickItem)
    }

    render() {
        return (
            <div className = "Shoppingbag">
                <Nav />
                <span className = "ShoppingbagTitle">Shopping Bag</span>
                <section className = "OrderdList">
                    <span className = "ShoppingbagEmpty">장바구니에 담으신 상품이 없습니다.</span>
                    <table className = "OrderdProductList">
                        <ItemList pickedItem = {this.state.pickItem} totalPrice = {this.state.totalPrice} onSubmit ={this.onSearchSubmit} clearList = {this.clearList}/>
                    </table>
                    </section>
                <section className = "ShoppingbagFooter">
                    <div className = "PriceCalculatorWrapper">
                        <div>
                            <span>5만원 이상 결제 시 무료로 배송 받을 수 있습니다.</span>
                            <div>
                                <span >선택한 상품 삭제하기</span>
                                <span onClick = {this.clearList}>장바구니 비우기</span>
                            </div>
                        </div>
                    </div>     
                    <div className = "PriceCalculatedWrapper">
                        <div className = "PriceCalculated" onChange ={(e)=>this.cutValue(e)}>
                            <ul>
                                <li>
                                    <span>주문금액</span>
                                    <span className = "CalculatedPrice" >{this.state.realtotalPrice}원</span>
                                </li>
                                <li>
                                    <span>배송비</span>
                                    <span className = "ShippingFee">{this.state.shippingFee}원</span>
                                </li>
                                <li className = "sum">
                                    <span >합계</span>
                                    <span className = "ShippingFee" >{this.state.realtotalPrice+this.state.shippingFee}원</span>
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
                <Footer />
            </div>
        )
    }

}
//sampleData
const pickedItem = [
    {img: "https://hince.co.kr/web/product/tiny/20200617/b4b788b34fdd1c711ee75bf74a8096a6.jpg",
    name:"무드인핸서 리퀴드 마뜨 오운 스킨",
    price:19000,
    count:1,
    },
    {img: "https://hince.co.kr/web/product/tiny/20200617/b4b788b34fdd1c711ee75bf74a8096a6.jpg",
    name:"무드 무드무드 리퀴드 마뜨 오운 스킨",
    price:15000,
    count:1,
    },
    {img: "https://hince.co.kr/web/product/tiny/20200617/b4b788b34fdd1c711ee75bf74a8096a6.jpg",
    name:"무드 무드무드 와라라 마뜨 오운 스킨",
    price:15000,
    count:1,
    }
]