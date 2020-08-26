import React, { Component } from "react";
import ImgBox from "./ImgBox";
import newProduct from "./MainNewProductSliderData";
import "./MainNewProductSlider.scss";

class MainNewProductSlider extends Component {
  constructor() {
    super();
    this.state = {
      pictures: newProduct.pictures,
      currentPicture: newProduct.pictures[0],
      activeTab: 0,
    };
  }

  handlePrev = (id) => {
    const { pictures, currentPicture, activeTab } = this.state;
    const newIndex = currentPicture.index - 1;
    this.setState({
      currentPicture: pictures[newIndex],
      activeTab: activeTab + id,
    });
  };

  handleNext = (id) => {
    const { pictures, currentPicture, activeTab } = this.state;
    const newIndex = currentPicture.index + 1;
    this.setState({
      currentPicture: pictures[newIndex],
      activeTab: activeTab + id,
    });
  };

  handleBtn = (id) => {
    const { pictures } = this.state;
    this.setState({
      currentPicture: pictures[id],
      activeTab: id,
    });
  };

  render() {
    const { pictures, currentPicture, activeTab } = this.state;
    return (
      <div className="MainNewProductSlider">
        <div className="sectionProduct">
          <a href="/">{newProduct.pictures[activeTab].name}</a>
        </div>
        <div className="sectionCarousel">
          <ul>
            <li>
              <button
                className={activeTab === 0 ? "btnActive" : ""}
                onClick={() => this.handleBtn(0)}
              />
            </li>
            <li>
              <button
                className={activeTab === 1 ? "btnActive" : ""}
                onClick={() => this.handleBtn(1)}
              />
            </li>
            <li>
              <button
                className={activeTab === 2 ? "btnActive" : ""}
                onClick={() => this.handleBtn(2)}
              />
            </li>
            <li>
              <button
                className={activeTab === 3 ? "btnActive" : ""}
                onClick={() => this.handleBtn(3)}
              />
            </li>
          </ul>
        </div>
        <div className="sectionBottom"></div>
        <div className={`sliderContent activeSlide${currentPicture.index}`}>
          <div
            className="sliderWrapper"
            style={{
              transform: `translateX(-${
                currentPicture.index * (100 / pictures.length)
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
            disabled={currentPicture.index === 0}
          ></button>
          <button
            className="nextBtn"
            onClick={() => this.handleNext(+1)}
            disabled={currentPicture.index === newProduct.pictures.length - 1}
          ></button>
        </div>
      </div>
    );
  }
}

export default MainNewProductSlider;
