import React, { Component } from "react";
import "./Store.scss";
import Nav from "../../Components/Nav";
import Footer from "../../Components/Footer";
import StoreList from "../Sign/StoreList";

class Store extends Component {
  state = {
    locationInfo: [...sampleArr33],
  };

  render() {
    return (
      <div className="Store">
        <Nav />
        <div className="pageHeader">
          <div className="pageTitle">hince Atelier</div>
        </div>
        <div className="pageCover"></div>
        <div className="storeBox">
          <div className="descriptionContainer">
            <h3>
              무드 내러티브 브랜드 힌스의
              <br />
              첫번째 플래그쉽 스토어, 힌스 아틀리에.
            </h3>
            <div className="description">
              힌스 아틀리에는 작은 공간 속에서도 브랜드가 지향하는 분위기와
              아름다움을 가장 극적으로 체험할 수 있도록 디자인 되었습니다.
              제품의 패키지에서 영감을 받은 곡선과 정제된 디테일, 오프라인에서만
              경험할 수 있는 특별한 테스팅 서비스와 무드룸을 경험하며 당신만의
              분위기를 마주해 보세요.
            </div>

            {/* <div className="map">
              <img src="/Images/store.jpg" alt="store" />
              <div className="hinceStore">
                <h3 className="titleContainer">hince Atelier Seongsu</h3>
                <div className="titleBox">
                  <p className="des1">서울 성동구 왕십리로14길 22-2</p>
                  <p className="des2">02-2135-3031</p>
                </div>
                <div className="titleBox">
                  <p className="des1">월요일 ~ 일요일</p>
                  <p className="des2">12:00 ~ 8:00</p>
                </div>
              </div>
            </div> */}
            {/* <div className="curationZoneWrapper">
              <div className="curationZone">
                <h3 className="titleContainer">Curation Zone</h3>
                <p className="des1">
                  매장 내에 비치된 립 테스터 카드를 이용해
                  <br />
                  나에게 맞는 컬러 무드를 찾아보세요.
                </p>
              </div>
            </div> */}
          </div>
        </div>
        <div className="StoreBox">Store</div>
        {this.state.locationInfo.map((location, index) => (
          <StoreList info={location.info} name={location.name} />
        ))}
      </div>
    );
  }
}

let sampleArr33 = [
  {
    name: "롯데면세점 소공점",
    info: "서울시 중구 소공동 1 롯데백화점 본점 롯데면세점 9층 블루밍뷰티",
  },
  {
    name: "롯데면세점 소공점",
    info: "서울시 중구 소공동 1 롯데백화점 본점 롯데면세점 9층 블루밍뷰티",
  },
  {
    name: "롯데면세점 소공점",
    info: "서울시 중구 소공동 1 롯데백화점 본점 롯데면세점 9층 블루밍뷰티",
  },
  {
    name: "롯데면세점 소공점",
    info: "서울시 중구 소공동 1 롯데백화점 본점 롯데면세점 9층 블루밍뷰티",
  },
  {
    name: "롯데면세점 소공점",
    info: "서울시 중구 소공동 1 롯데백화점 본점 롯데면세점 9층 블루밍뷰티",
  },
  {
    name: "롯데면세점 소공점",
    info: "서울시 중구 소공동 1 롯데백화점 본점 롯데면세점 9층 블루밍뷰티",
  },
  {
    name: "롯데면세점 소공점",
    info: "서울시 중구 소공동 1 롯데백화점 본점 롯데면세점 9층 블루밍뷰티",
  },
  {
    name: "롯데면세점 소공점",
    info: "서울시 중구 소공동 1 롯데백화점 본점 롯데면세점 9층 블루밍뷰티",
  },
  {
    name: "롯데면세점 소공점",
    info: "서울시 중구 소공동 1 롯데백화점 본점 롯데면세점 9층 블루밍뷰티",
  },
  {
    name: "롯데면세점 소공점",
    info: "서울시 중구 소공동 1 롯데백화점 본점 롯데면세점 9층 블루밍뷰티",
  },
];

export default Store;
