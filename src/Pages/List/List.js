import React, { Component } from 'react';
import Product from'./Product';
import Nav from '../../Components/Nav'
import ProductNav from '../List/ProductNav'
import ProductListBottom from '../List/ProductListBottom'
import Footer from '../../Components/Footer'

import './List.scss'
import ProductFilter from './ProductFilter'

class List extends Component {
  constructor(){
    super()

    this.state = {
      src:[{imgsrc : "http://hince.co.kr/web/product/small/201909/12dc7b682375b7859bb79e76cacc6666.jpg"},{imgsrc : "http://hince.co.kr/web/product/small/201909/12dc7b682375b7859bb79e76cacc6666.jpg"},{imgsrc : "http://hince.co.kr/web/product/small/201909/12dc7b682375b7859bb79e76cacc6666.jpg"},{imgsrc : "http://hince.co.kr/web/product/small/201909/12dc7b682375b7859bb79e76cacc6666.jpg"},{imgsrc : "http://hince.co.kr/web/product/small/201909/12dc7b682375b7859bb79e76cacc6666.jpg"},{imgsrc : "http://hince.co.kr/web/product/small/201909/12dc7b682375b7859bb79e76cacc6666.jpg"}],
    }
  }
  

  componentDidMount
  render() {
    return (
      <div className = "List">
        <Nav />
        <ProductNav />
        <ProductFilter />
        <div className="ProductListContainer">
          <ul className ="ProductList">
            {this.state.src.map(({imgsrc})=><Product imgsrc ={imgsrc} />)}
          </ul>
        </div>
        <ProductListBottom />
        <Footer />
      </div>
    );
  }
}

export default List;