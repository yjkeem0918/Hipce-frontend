import React, { Component } from "react";
import ImgBox from "./ImgBox";
import newProduct from "./MainNewProductSliderData";
import "./MainNewProductSlider.scss";

class MainNewProductSlider extends Component {
  constructor() {
    super();
    this.state = {
      newIndex: 0,
      currentPicture: this.props.newProduct[0],
    };
  }

  // handlePrev = (id) => {
  //   const { pictures, currentPicture, activeTab } = this.state;
  //   const newIndex = currentPicture.index - 1;
  //   this.setState({
  //     currentPicture: pictures[newIndex],
  //     activeTab: activeTab + id,
  //   });
  // };

  // handleNext = (id) => {
  //   const { pictures, currentPicture, activeTab } = this.state;
  //   const newIndex = currentPicture.index + 1;
  //   this.setState({
  //     currentPicture: pictures[newIndex],
  //     activeTab: activeTab + id,
  //   });
  // };

  // handleBtn = (id) => {
  //   const { pictures } = this.state;
  //   this.setState({
  //     currentPicture: pictures[id],
  //     activeTab: id,
  //   });
  // };
  handleBtn = (id) => {
    const { newProduct } = this.props;
    this.setState({
      newIndex: id,
      currentPicture: newProduct[id],
    });
  };
  handleSlider = (id) => {
    const { newIndex } = this.state;
    const { newProduct } = this.props;
    this.setState({
      newIndex: newIndex + id,
      currentPicture: newProduct[newIndex],
    });
  };

  render() {
    const { newIndex, currentPicture } = this.state;
    const { newProduct } = this.props;
    return (
      <div className="MainNewProductSlider">
        <div className="sectionProduct">
          <a href="/">{newProduct[newIndex].name}</a>
        </div>
        <div className="sectionCarousel">
          <ul>
            <li>
              <button
                className={newIndex === 0 ? "btnActive" : ""}
                onClick={() => this.handleBtn(0)}
              />
            </li>
            <li>
              <button
                className={newIndex === 1 ? "btnActive" : ""}
                onClick={() => this.handleBtn(1)}
              />
            </li>
            <li>
              <button
                className={newIndex === 2 ? "btnActive" : ""}
                onClick={() => this.handleBtn(2)}
              />
            </li>
            <li>
              <button
                className={newIndex === 3 ? "btnActive" : ""}
                onClick={() => this.handleBtn(3)}
              />
            </li>
          </ul>
        </div>
        <div className="sectionBottom"></div>
        <div className={`sliderContent activeSlide${currentPicture[newIndex]}`}>
          <div
            className="sliderWrapper"
            style={{
              transform: `translateX(-${
                currentPicture[newIndex] * (100 / newProduct.length)
              }%)`,
            }}
          >
            {newProduct.map((item) => {
              return <ImgBox key={item.id} src={item.main_image} />;
            })}
          </div>
        </div>
        <div className="sliderBtn">
          <button
            className="prevBtn"
            onClick={() => this.handleSlider(-1)}
            disabled={newIndex === 0}
          ></button>
          <button
            className="nextBtn"
            onClick={() => this.handleSlider(+1)}
            disabled={newIndex === newProduct.length - 1}
          ></button>
        </div>
      </div>
    );
  }
}

export default MainNewProductSlider;
