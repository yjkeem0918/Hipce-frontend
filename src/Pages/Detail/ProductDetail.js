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
                            리뷰 보기(<span className="count">64</span>)
                        </span>
                    </a>
                </nav>
                <div className="detailContainer">
                    <div className="productEvent">
                        <p>
                        <img src="./Images/상세페이지1.jpg" />
                        </p>
                    </div>   
                    <p><img alt src="./Images/collection_1.jpg" /></p>
                    {/* <p><<img alt src="./Images/collection.gif" /></p>    */}
                    <p><img alt src="./Images/collection_2.jpg" /></p>
                    <p><img alt src="./Images/collection_3.jpg" /></p>
                    <p><img alt src="./Images/collection_4.jpg" /></p>

                </div>
                
                
            </div>
        );
    }
}

export default ProductDetail;