// import React, { Component } from 'react'

// export default class Pallete extends Component {
//     constructor(){
//         super()

//         this.state={
//             clickColor:'white',
//             selected:[],
//             boolean: [],
//         }
//     }

//     palleteButtonKeep =(e)=>{
//         e.preventDefault();
//         console.log(e.target.index);
//         // this.setState({selected: this.state.selected.concat(e.target.attributes.nodeValue)})
//         // this.setState({})

//     }

//     render() {
//         return (
//             <div className="Pallete">
//                 <ul>
//                     {this.props.color.map(({color,name}, index)=> 
//                     <li boolean = {this.state.boolean} key={index} index={index} name ={name} style = {{backgroundColor: this.state.clickColor}} onClick ={this.palleteButtonKeep} >
//                         <button name ={name} key ={index}  style={{backgroundColor: color}} > </button>
//                     </li>)}
//                 </ul>
//             </div>
//         )
//     }
}
