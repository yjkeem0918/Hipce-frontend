import React, { Component } from "react";

export default class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log("childState", this.state.pickedItem);
    console.log("getLenth", this.props.pickedItem.length);
    return (
      <div className="ItemList" onChange={this.clearList}>
        {this.props.pickedItem.map((item, index) => {
          return (
            <td key={index} className="pickItem">
              <div className="pickItemPicture">
                <input type="checkbox" id={`checkbox${index}`} />
                <label for={`checkbox${index}`}></label>
                <img alt="productImage" src={item.img} />
                <span className="productName">{item.name}</span>
              </div>
              <div className="pickItemCount">
                <form className="count" onSubmit={this.onFormSubmit}>
                  <button
                    className="countButton"
                    name="minusButton"
                    onClick={(e) => this.props.handleCounting(item, -1, e)}
                  >
                    {" "}
                    -{" "}
                  </button>
                  <span>{item.count}</span>
                  <button
                    className="countButton"
                    name="plusButton"
                    onClick={(e) => this.props.handleCounting(item, +1, e)}
                  >
                    {" "}
                    +{" "}
                  </button>
                </form>
                <div className="eachPrice">{item.price}원</div>
                <button onClick={() => this.props.deleteList(item)}>X</button>
              </div>
            </td>
          );
        })}
      </div>
    );
  }
}
