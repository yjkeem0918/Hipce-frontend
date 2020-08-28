import React, { Component } from "react";
import ImgBox from "./ImgBox";
import "./MainBestSellerSlider.scss";

class MainBestSellerSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newIndex: 0,
    };
  }

  handleSlider = (id) => {
    const { newIndex } = this.state;
    this.setState({
      newIndex: newIndex + id,
    });
  };

  handleBtn = (id) => {
    this.setState({
      newIndex: id,
    });
  };

  render() {
    const { newIndex } = this.state;
    const { discountProduct} = this.props;
    return (
      <div className="MainBestSellerSlider">
        <div className="sectionProduct">
          <a href="/">{discountProduct[newIndex]?.name}</a>
        </div>
        <div className="sectionCarousel">
          <ul>
            <li>
              <button
                className={newIndex%4 === 0 ? "btnActive" : ""}
                onClick={() => this.handleBtn(0)}
              />
            </li>
            <li>
              <button
                className={newIndex%4 === 1 ? "btnActive" : ""}
                onClick={() => this.handleBtn(1)}
              />
            </li>
            <li>
              <button
                className={newIndex%4 === 2 ? "btnActive" : ""}
                onClick={() => this.handleBtn(2)}
              />
            </li>
            <li>
              <button
                className={newIndex%4 === 3 ? "btnActive" : ""}
                onClick={() => this.handleBtn(3)}
              />
            </li>
          </ul>
        </div>
        <div className="sectionBottom" />
        <div className={`sliderContent activeSlide${newIndex}`}>
          <div
            className="sliderWrapper"
            style={{
              transform: `translateX(-${
                newIndex * (100 / discountProduct.length)
              }%)`,
            }}
          >
            {discountProduct.map((item, index) => {
              return <ImgBox src={item.main_image} index={index} id={item.id} />;
            })}
          </div>
        </div>
        <div className="sliderBtn">
          <button
            className="prevBtn"
            onClick={() => this.handleSlider(-1)}
            disabled={newIndex === 0}
          />
          <button
            className="nextBtn"
            onClick={() => this.handleSlider(+1)}
            disabled={newIndex === discountProduct.length - 1}
          />
        </div>
      </div>
    );
  }
}

export default MainBestSellerSlider;