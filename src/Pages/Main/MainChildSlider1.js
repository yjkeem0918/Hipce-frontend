import React, { Component } from 'react';
import Slider from "react-slick";
import "./MainChildSlider1.scss"

class MainChildSlider1 extends Component {
  render() {
    const settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 2,
      arrows: true
    };
    return (
    <Slider className="MainChildSlider1" {...settings}>
      <div>
        <img src="http://hince.co.kr/images/main/new-product/20-06-18-gentle-and-firm.jpg" />
      </div>
      <div>
        <img src="http://hince.co.kr/images/main/new-product/20-06-18-point-of-view.jpg" />
      </div>
      <div>
        <img src="http://hince.co.kr/images/main/new-product/20-06-18-off-balance.jpg" />
      </div>
      <div>
        <img src="http://hince.co.kr/images/main/new-product/20-06-18-new-perspective.jpg" />
      </div>
    </Slider>
    );
  }
}

export default MainChildSlider1;