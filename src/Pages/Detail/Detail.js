import React, { Component } from 'react';
import DetailMain from './DetailMain';
import Review from './Review'
import ProductDetail from './ProductDetail'
import Reviewframe from './ReviewFrame'
import Nav from "../../Components/Nav";
import Footer from "../../Components/Footer";
import './Detail.scss';
 
 

class Detail extends Component {
 constructor(props) {
   super(props);
   this.state = {
    reviews : [],
    data:[],
    descImg : [],
    nameData: [],
    sampleData: this.props
 } 
}

componentDidMount= () => {
  fetch(`http://3.17.134.84:8000/products/${this.props.match.params.id}`)
  .then((res) => res.json())
  .then(res =>{
    this.setState({
      data:res.product,
      nameData: res.product
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
