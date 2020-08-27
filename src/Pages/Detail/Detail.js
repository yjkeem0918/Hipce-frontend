import React, { Component } from 'react';
import DetailMain from './DetailMain';
import Review from './Review'
import ProductDetail from './ProductDetail'
import Reviewframe from './ReviewFrame'
import Nav from "../../Components/Nav";
import Footer from "../../Components/Footer";
import './Detail.scss';
 
 

class Detail extends Component {
 constructor() {
   super();
   this.state = {
     reviews : [{user: "김영*", content: "너무 좋아요.", img: "none"},
    {user: "조은*", content: "진짜 색감이 대박입니다 케이스도 넘이쁘고 물건입니당", img:"https://assets6.cre.ma/p/hince-co-kr/reviews/00/00/01/98/65/image1/thumbnail_523ed18c73859870.jpg"},
  {user:"이조*", content:"힌스 디자인에 반해서 리뷰 찾아보다가 한번 사봤어요. 원체 쨍한 색감은 안받는 편이라 얼루어먼트 구매했고, 생각대로 너무 예쁜 색상이에요. 단품으로 발라도 예쁘고, 다른 색상이랑 섞어서 발라도 무난하게 섞여드는 색상이라 활용 잘 할 것 같네요. 디자인은 말할 것 없이 곡선, 색감 다 마음에 들고, 패키징도 예뻐서 박스를 못 버리고 있네요.예쁘게 잘 사용하겠습니다:-)"}
,{user:"네이버 페이 구매*",content:"얼루어 정말 좋아하는데 벨벳질감 까지 너무 좋아요 ㅠㅠ"}],
data:[],
    descImg : [],
 } 
}

componentDidMount= () => {
  fetch('http://3.17.134.84:8000/products/1599')
  .then((res) => res.json())
  .then(res =>{
    console.log(res)
    this.setState({
      data:res.product
    }, () => {
      let list = this.state.data[0].description_image.split(",");
      list[0] = list[0].substring(1);
      list[list.length-1] = list[list.length - 1].substring(0, list[list.length-1].length - 1);
      let newList = [];
      list.forEach((el, idx)=> {
        idx === 0
        ? newList.push(el.trim().substring(1,el.length - 1))
        : newList.push(el.trim().substring(1,el.length - 2));
      });
      this.setState({
        descImg: newList,
      } )
    })
  })
}

  render() {
    console.log(this.props);
    return (
      <div className="Detail">
         <Nav />
         <DetailMain name={this.state.data.map(el=>el.name)[0]} 
         price={this.state.data.map(el=>el.price)[0]}
         mainImage ={this.state.data.map(el=>el.main_image)[0]}
          />
         <ProductDetail descriptionImage={this.state.descImg}/>
         <Reviewframe />
         <ul>
            {this.state.reviews.map((review) => {
              return <Review
              img = {review.img} user={review.user} content={review.content} key={this.state.reviews.user} />
             })}   
           </ul>
         <div className="footerBox">
         <Footer /> 
         </div>        
      </div>
    );
  }
}

export default Detail;
