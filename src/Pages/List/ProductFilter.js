import React, { Component } from 'react'
import './ProductFilter.scss'

export default class ProductFilter extends Component {
    constructor(props){
        super(props)

        this.state = {
            classification: ""
        }
    }

    render() {
        return (
            <div className ="ProductFilter">
                    <h2>Lip</h2>
                    <span></span>
                    <div>
                        <form> // 필터 색
                            <div>

                            </div>
                            <div>

                            </div>
                        </form>
                    </div>
            </div>
        )
    }
}
