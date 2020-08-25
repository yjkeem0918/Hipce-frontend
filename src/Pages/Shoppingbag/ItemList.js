import React, { Component } from "react";

export default class ItemList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ItemList" onChange={this.clearList}>
        {this.props.pickedItem.map((item, index) => {
          return (
            <td key={index} className="pickItem">
              <div className="pickItemPicture">
                <input
                  type="checkbox"
                  id={`checkbox${index}`}
                  onClick={() => this.props.checkItem(item)}
                />
                <label htmlFor={`checkbox${index}`}></label>
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
