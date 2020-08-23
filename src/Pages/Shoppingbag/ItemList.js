import React, { Component } from 'react'

export default class ItemList extends Component {
    constructor(props){
        super(props)
        this.handleCounting = this.handleCounting.bind(this);
        this.state = {
            pickedItem: this.props.pickedItem,
            totalPrice: 0,
        };

    }

    // // shouldComponentUpdate(){
    // //     if(this.props.pickedItem.length === 0){

    // //     }
    // // }

    // componentWillReceiveProps(){
    //     this.setState({pickedItem:this.props.pickedItem})

    // }

    handleCounting=(item, inDecrement, e)=>{
        if(e.target.name =="plusButton" && item.count == 5){
            alert("최대주문수량 5개")
            return
        }
        if(e.target.name === "plusButton"){
            this.setState({
                pickedItem: this.state.pickedItem.map(el=> el.name === item.name ? {...el, price: (el.price*(el.count+1))/(el.count), count: el.count+inDecrement}: el),
            })
        }
        if(e.target.name == "minusButton" && item.count == 1){
            return
        }
        if(e.target.name === "minusButton"){
            this.setState({
                pickedItem: this.state.pickedItem.map(el=> el.name === item.name ? {...el, price: parseInt((el.price*(el.count-1))/(el.count)), count: el.count+inDecrement}: el)
            })
        }
        this.setState({totalPrice: this.state.pickedItem.map(el => el.price).reduce((a,b)=> a+b, 0)})
    }

    onFormSubmit =(e)=>{
        e.preventDefault()
        this.props.onSubmit(this.state.totalPrice)
    }

    deleteList=(item)=>{
        this.setState({
            pickedItem: this.state.pickedItem.filter(el => el.name !== item.name)
        })
    }
    clearList = ()=>{
        console.log(this.state.pickItem)
        this.setState({pickItem:[]})
        console.log(this.state.pickItem)
    }

    render() {
        console.log("childState",this.state.pickedItem)
        console.log("getLenth",this.props.pickedItem.length)
        return (
            <div className = "ItemList" onChange ={this.clearList}>
                {this.state.pickedItem.map((item, index)=>{
                    return <td key = {index} className = "pickItem">
                    <div className = "pickItemPicture">
                        <input type = "checkbox" id = {`checkbox${index}`}/>
                        <label for = {`checkbox${index}`}></label>
                        <img alt = "productImage" src = {item.img}/>
                        <span className = "productName">{item.name}</span>
                    </div>
                    <div className = "pickItemCount">
                        <form className = "count" onSubmit ={this.onFormSubmit}>
                            <button className = "countButton" name = "minusButton" onClick = {(e)=>this.handleCounting(item, -1, e)}> - </button>
                            <span>{item.count}</span>
                            <button className = "countButton" name = "plusButton" onClick = {(e)=>this.handleCounting(item, +1, e)}> + </button>
                        </form>
                        <div className = "eachPrice">{item.price}원</div>
                        <button onClick = {()=>this.deleteList(item)}>X</button>
                    </div>
                </td>
                })}
            </div>
        )
    }

}
