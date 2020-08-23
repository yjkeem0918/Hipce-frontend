import React, { Component } from 'react';
import "./MainBestSellerSlider.scss";

class MainBestSellerSlider extends Component {
  constructor() {
    super();
    this.state = {
      pictures: newProduct.pictures,
      currentPicture: newProduct.pictures[0],
      activeTab: 0,
    };
  }

  handlePrev = (id) => {
    const newIndex = this.state.currentPicture.index - 1;
    this.setState({
      currentPicture: this.state.pictures[newIndex],
      activeTab: this.state.activeTab + id,
    });
  };

  handleNext = (id) => {
    const newIndex = this.state.currentPicture.index + 1;
    this.setState({
      currentPicture: this.state.pictures[newIndex],
      activeTab: this.state.activeTab + id,
    });
  };

  handleBtn = (id) => {
    this.setState({
      currentPicture: this.state.pictures[id],
      activeTab: id,
    });
  };

  render() {
    return (
      <div className="MainNewProductSlider">
        <div className="sectionProduct">
          <a href="/">{newProduct.pictures[this.state.activeTab].name}</a>
        </div>
        <div className="sectionCarousel">
          <ul>
            <li>
              <button
                className={this.state.activeTab === 0 ? "btnActive" : ""}
                onClick={() => this.handleBtn(0)}
              />
            </li>
            <li>
              <button
                className={this.state.activeTab === 1 ? "btnActive" : ""}
                onClick={() => this.handleBtn(1)}
              />
            </li>
            <li>
              <button
                className={this.state.activeTab === 2 ? "btnActive" : ""}
                onClick={() => this.handleBtn(2)}
              />
            </li>
            <li>
              <button
                className={this.state.activeTab === 3 ? "btnActive" : ""}
                onClick={() => this.handleBtn(3)}
              />
            </li>
          </ul>
        </div>
        <div className="sectionBottom">
        </div>
        <div className={`sliderContent activeSlide${this.state.currentPicture.index}`}>
          <div
            className="sliderWrapper"
            style={{
              transform: `translateX(-${
                this.state.currentPicture.index *
                (100 / this.state.pictures.length)
              }%)`,
            }}
          >
            {newProduct.pictures.map((item) => {
              return (
                <ImgBox key={item.index} src={item.src} index={item.index} />
              );
            })}
          </div>
        </div>

        <div className="sliderBtn">
          <button
            className="prevBtn"
            onClick={() => this.handlePrev(-1)}
            disabled={this.state.currentPicture.index === 0}
          ></button>
          <button
            className="nextBtn"
            onClick={() => this.handleNext(+1)}
            disabled={
              this.state.currentPicture.index === newProduct.pictures.length - 1
            }
          ></button>
        </div>
      </div>
    );
  }
}

class ImgBox extends Component {
  render() {
    return (
      <div class="ImgBox">
        <img id={`slide${this.props.index}`} src={this.props.src} />
      </div>
    );
  }
}

const newProduct = {
  pictures: [
    {
      index: 0,
      src:
        "http://hince.co.kr/images/main/new-product/20-06-18-gentle-and-firm.jpg",
      name: "뉴 뎁스 아이섀도우 팔레트 젠틀 앤 펌",
    },
    {
      index: 1,
      src:
        "http://hince.co.kr/images/main/new-product/20-06-18-off-balance.jpg",
      name: "뉴 뎁스 아이섀도우 팔레트 오프 밸런스",
    },
    {
      index: 2,
      src:
        "http://hince.co.kr/images/main/new-product/20-06-18-point-of-view.jpg",
      name: "무드인핸서 리퀴드 마뜨 포인트 오브 뷰",
    },
    {
      index: 3,
      src:
        "http://hince.co.kr/images/main/new-product/20-06-18-new-perspective.jpg",
      name: "무드인핸서 리퀴드 마뜨 뉴 퍼스펙티브",
    },
  ],
};

export default MainBestSellerSlider;