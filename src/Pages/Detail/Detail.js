import React, { Component } from "react";
import Nav from "../../Components/Nav";
import DetailMain from "./DetailMain";
import Review from "./Review";
import ProductDetail from "./ProductDetail";
import Reviewframe from "./ReviewFrame";
import Footer from "../../Components/Footer";
import "./Detail.scss";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [
        { user: "김영*", content: "너무 좋아요." },
        {
          user: "조은*",
          content: "진짜 색감이 대박입니다 케이스도 넘이쁘고 물건입니당",
        },
        {
          user: "이조*",
          content:
            "힌스 디자인에 반해서 리뷰 찾아보다가 한번 사봤어요. 원체 쨍한 색감은 안받는 편이라 얼루어먼트 구매했고, 생각대로 너무 예쁜 색상이에요. 단품으로 발라도 예쁘고, 다른 색상이랑 섞어서 발라도 무난하게 섞여드는 색상이라 활용 잘 할 것 같네요. 디자인은 말할 것 없이 곡선, 색감 다 마음에 들고, 패키징도 예뻐서 박스를 못 버리고 있네요.예쁘게 잘 사용하겠습니다:-)",
        },
        {
          user: "네이버 페이 구매*",
          content: "얼루어 정말 좋아하는데 벨벳질감 까지 너무 좋아요 ㅠㅠ",
        },
      ],
      data: [],
    };
  }

  componentDidMount() {
    fetch(`http://3.17.134.84:8000/products/${this.props.match.params.id}`)
      .then((res) => res.json())
      .then((res) => this.setState({ data: res }));
  }

  render() {
    console.log("Hello", this.props.match.params.id);
    return (
      <div className="Detail">
        <Nav />
        <DetailMain />
        <ProductDetail />
        <Reviewframe />
        <ul>
          {this.state.data.map((review, idx) => {
            return (
              <Review
                user={review.user}
                content={review.content}
                key={this.state.data.user}
              />
            );
          })}
        </ul>
        <Footer />
      </div>
    );
  }
}

export default Detail;
