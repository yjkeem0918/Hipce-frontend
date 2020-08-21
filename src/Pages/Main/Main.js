import React, { Component } from "react";
import MainChild1 from "./MainChild1";
import MainChild2 from "./MainChild2";
import MainChild3 from "./MainChild3";
import MainChild4 from "./MainChild4";
import MainChild5 from "./MainChild5";
import MainChildSlider1 from "./MainChildSlider1";
import "./Main.scss";

class Main extends Component {
  render() {
    const data = [
      {
        sectionLabel: "01",
        sectionTitle: {
          sectionTitleH1: "Collection",
          sectionTitleP: "My Own Attitude. 나의 관점, 나의 태도.",
        },
        sectionImg:
          "https://hince.co.kr/images/main/section/19-05-06-collection.jpg",
      },
      {
        sectionLabel: "02",
        sectionTitle: {
          sectionTitleH1: "New Product",
          sectionTitleP: "힌스의 신상품을 가장 먼저 만나보세요.",
        },
      },
      {
        sectionLabel: "03",
        sectionTitle: {
          sectionTitleH1: "Best Seller",
          sectionTitleP: "가장 많은 사랑을 받고있는 힌스의 베스트셀러",
        },
      },
      {
        sectionLabel: "04",
        sectionTitle: {
          sectionTitleH1: "Edition",
          sectionTitleP:
            "리미티드 에디션으로 만나는 무드인핸서 마뜨 미니 컬렉션",
        },
        sectionImg:
          "http://hince.co.kr/images/main/section/19-01-05-edition.jpg",
      },
      {
        sectionLabel: "05",
        sectionTitle: {
          sectionTitleH1: "hince Atelier",
          sectionTitleP:
            "힌스의 첫 공식 플래그십 스토어를 성수동에서 만나 보세요",
        },
        sectionImg:
          "http://hince.co.kr/images/main/section/19-01-05-atelier.jpg",
      },
    ];
    return (
      <>
        {/* {data.map((datalist) => (
          <MainChild props={datalist} />
        ))} */}
        <MainChild1 />
        <MainChild2 />
        <MainChild3 />
        <MainChild4 />
        <MainChild5 />
        <MainChildSlider1 />
      </>
    );
  }
}

export default Main;
