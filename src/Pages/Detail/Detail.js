import React, { Component } from 'react';
import DetailMain from './DetailMain';
import Review from './Review'
import ProductDetail from './ProductDetail'
import './Detail.scss';

 
 
class Detail extends Component {
  render() {
    return (
      <div className="Detail">
         <DetailMain />
         <ProductDetail />
         <Review />
      </div>
    );
  }
}

export default Detail;