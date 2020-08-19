import React, { Component } from 'react'
import './ProductFilter.scss'

export default class ProductFilter extends Component {
    constructor(props){
        super(props)

        this.state = {
            palleteDisplay: 'ProductFilterPallete',
            classification: "",
            color:[...collorRange],
        }
    }

    palleteDisplayChange = ()=> {
        if(this.state.palleteDisplay === "ProductFilterPallete"){
            this.setState({palleteDisplay : "hidden"})
        }
        else{
            this.setState({palleteDisplay : "ProductFilterPallete"})
        }

    }

    render() {
        return (
            <div className ="ProductFilter">
                    <div className="ProductFilterName">
                        <h2>Lip</h2>
                        <span onClick ={this.palleteDisplayChange}></span>
                    </div>
{/* ProductFilterPallete */}
                    <form className ={this.state.palleteDisplay}>
                            <section>
                                <span>컬러</span>
                                <div>
                                    <ul>
                                        {this.state.color.map(({color})=> 
                                        <li>
                                            <button style  = {{backgroundColor: color}}> </button>
                                        </li>)}
                                    </ul>
                                </div>
                            </section>
                            <section>
                                <div className = "PalleteSearchBox">
                                    <span>결과 내 검색</span>
                                    <div>
                                        <input></input>
                                        <button>검색</button>
                                    </div>
                                </div>
                            </section>
                    </form>
            </div>
        )
    }
}

const collorRange = [{color: '#b12a23'},
                    {color: '#dc6b2f'},
                    {color: '#d6ae9a'},
                    {color: '#dd7d88'},
                    {color: '#835248'},
                    {color: '#ef5a41'},
                    {color: '#b0718d'},
                    {color: '#b70316'},
                    {color: '#915f6d'}]
