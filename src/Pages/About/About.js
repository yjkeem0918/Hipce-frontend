import React, { Component } from "react";
import Nav from "../../Components/Nav";
import Footer from "../../Components/Footer";
import "./About.scss";
import "../../Styles/common.scss";
import "../../Styles/reset.scss";

export default class About extends Component {
  state = {
    alpha: [],
  };

  componentDidMount() {
    fetch(`http://10.58.2.217:8000/products/${this.props.id}`)
      .then((res) => res.json())
      .then((res) => this.setState({ alpha: res }));
  }

  render() {
    console.log(this.state.alpha);
    return (
      <div className="About">
        <Nav />
        <span className="aboutTitle"> About </span>
        <div className="sampleVideo">
          <video muted="true" autoPlay="true" loop="true">
            <source
              src="https://player.vimeo.com/external/310693190.hd.mp4?s=ec62f70ade026316f8ec3f7a3a6b5ff6e5566b4b&profile_id=174"
              type="video/mp4"
            />
          </video>
        </div>
        <section className="aboutExplanation">
          <img src="https://hince.co.kr/assets/images/hince-brand-logo.png" />
          <div>
            <p className="explanationKorean">
              힌스는 밀도 있고 풍부한 컬러를 통해 당신의 고유한 분위기를 쌓아
              올려
              <br />
              잠재되어 있는 본연의 아름다움을 발현시키는 Mood-Narative 메이크업
              브랜드 입니다.
            </p>
            <p className="explanationEnglish">
              hince is a Mood-Narrative makeup brand that expresses your full
              potential by building
              <br />
              on natural beauty unique to you with its dense and rich colors.
            </p>
          </div>
        </section>
        <section className="explanationTheme">
          <div className="themeImageWrapper">
            <div>
              <img
                alt="moodKeywordImg"
                src="https://hince.co.kr/images/about/brand-slogan-01-mood.jpg"
              />
              <span>MOOD</span>
            </div>
            <div>
              <img
                alt="moodKeywordImg"
                src="https://hince.co.kr/images/about/brand-slogan-02-tone.jpg"
              />
              <span>TONE</span>
            </div>
            <div>
              <img
                alt="moodKeywordImg"
                src="https://hince.co.kr/images/about/brand-slogan-03-attitude.jpg"
              />
              <span>ATTITUDE</span>
            </div>
          </div>
        </section>
        <section className="explanationInspiration">
          <div className="themeExplanation">
            <p className="themeExplanationKorean">
              힌스는 스스로의 신념과 열망에 확신을 가지고 보다 열정적으로
              살아가는 삶에 영감을 제공합니다.
            </p>
            <p className="themeExplanationEnglish">
              We provide inspiration to have confidence in your beliefs and
              aspirations for a more passionate life.
            </p>
          </div>
          <div className="inspirationImg">
            <img
              alt=""
              src="https://hince.co.kr/images/about/brand-image-01.jpg"
            />
            <div>
              <img
                alt=""
                src="https://hince.co.kr/images/about/brand-image-02.jpg"
              />
              <img
                alt=""
                src="https://hince.co.kr/images/about/brand-image-03.jpg"
              />
            </div>
          </div>
        </section>
        <div className="bottomLogo">
          <img
            alt="bottomLogo"
            src="https://hince.co.kr/assets/images/hince-brand-hlogo.png"
          />
        </div>
        <Footer />
      </div>
    );
  }
}
