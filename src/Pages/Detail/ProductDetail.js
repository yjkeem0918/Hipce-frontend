import React, { Component } from 'react';
import './ProductDetail.scss';

class ProductDetail extends Component {
    render() {
        return (
            <div className="ProductDetail">
                <nav>
                    <a href="#">
                        <span className="detailInfo">
                            상세 정보 
                        </span>
                    </a> 
                    <a href="#">
                        <span className="gotoReview">
                            리뷰 보기
                            {/* (<span className="count">64</span>) */}
                        </span>
                    </a>
                </nav>
                <div className="detailContainer">
                    <img src="./Images/상세페이지1.jpg" />
                    <img alt src="./Images/collection_1.jpg" /> 
                    <img alt src="https://hince.co.kr/images/mood-enhancer/shadowpalette/collection.gif" /> 
                    <img alt src="./Images/collection_2.jpg" /> 
                    <img alt src="./Images/collection_3.jpg" /> 
                    <img alt src="./Images/collection_4.jpg" /> 
                    <div className="infoContainer">
                        <div className="infoBox">
                            <div className="titleWrapper">
                                <span className="title">
                                    상품정보
                                </span>
                                <span className="subTitle">
                                    본 상품정보는 [공정거래위원회의 전자상거래 등에서의 상품정보제공 고시]에 따라 작성되었습니다.
                                </span>
                            </div>
                        </div>   
                    </div>
                </div>
                
                
            </div>
        );
    }
}

export default ProductDetail;