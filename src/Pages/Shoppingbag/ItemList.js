import React, { Component } from "react";

export default class ItemList extends Component {
  render() {
    const {
      props: { pickedItem, checkItem, deleteList, countPlus, countMinus },
    } = this;
    return (
      <div className="ItemList" onChange={this.clearList}>
        {pickedItem.map((item, index) => {
          return (
            <td className="pickItem" key={index}>
              <div className="pickItemPicture">
                <input
                  id={`checkbox${index}`}
                  type="checkbox"
                  onClick={() => checkItem(item)}
                />
                <label htmlFor={`checkbox${index}`}></label>
                <img alt="productImage" src={item.mainImgSrc} />
                <span className="productName">{item.name}</span>
              </div>
              <div className="pickItemCount">
                <form className="count">
                  <span
                    className="countButton"
                    name="minusButton"
                    onClick={() => countMinus(item, -1)}
                  >
                    -
                  </span>
                  <span>{item.count}</span>
                  <span
                    className="countButton"
                    name="plusButton"
                    onClick={() => countPlus(item, +1)}
                  >
                    +
                  </span>
                </form>
                <div className="eachPrice">
                  {Math.floor(item.price).toLocaleString()}원
                </div>
                <button onClick={() => deleteList(item)}>X</button>
              </div>
            </td>
          );
        })}
      </div>
    );
  }
}
