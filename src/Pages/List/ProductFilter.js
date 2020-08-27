import React, { Component } from "react";
import "./ProductFilter.scss";
import { Link, withRouter } from "react-router-dom";
class ProductFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      palleteDisplay: false,
      colors: [],
      selectedColor: [].map((el) => {
        return;
      }),
      filterdColor: "hidden",
      createURLcolor: "",
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/productMockdata.json")
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          colors: res.colorrange.map((color) => ({ ...color, active: false })),
        })
      );
  }

  palleteButtonKeep = (e, index) => {
    e.preventDefault();
    let newColors = [...this.state.colors];
    newColors[index].active = !newColors[index].active;
    let checkArr = this.state.colors.map((el) => el.active);
    let selctingOne = newColors.filter((el) => el.active && el.name);
    let createURL = selctingOne.map((el) => el.name);
    this.setState({ colors: newColors }, () => {
      if (!checkArr.filter((el) => el === true).includes(true)) {
        this.setState({ filterdColor: "hidden" });
        this.setState({
          selectedColor: this.state.selectedColor.concat(newColors[index]),
        });
      } else {
        this.setState({ filterdColor: "productFilteredName" });
      }
    });
    this.setState({ selectedColor: createURL });
    console.log(this.state.selectedColor.map((el) => `color=${el}`).join("&"));
    // this.props.history.push(
    //   `/list/${this.state.selectedColor.map((el) => `color=${el}`).join("&")}`
    // );
    // /list/acegorty = lip & color = red & color = orange;
  };
  // createURL = () => {
  //   const urlStr = this.state.selectedColor
  //     .map((el) => `color=${el}`)
  //     .join("&");

  //   // console.log(urlStr);
  // };
  palleteClear = () => {
    let newColors = [...this.state.colors];
    for (let color of newColors) color.active = false;
    this.setState({ colors: newColors, filterdColor: "hidden" });
    this.props.his;
  };

  render() {
    let changedTitleName = this.props.titleName.split("=")[1];
    const {
      state: { palleteDisplay, colors, filterdColor },
      palleteButtonKeep,
      palleteClear,
    } = this;
    return (
      <div className="productFilter">
        <div className="productFilterName">
          <h2>
            {changedTitleName &&
              changedTitleName[0].toUpperCase() + changedTitleName.slice(1)}
          </h2>
          <span
            onClick={() => this.setState({ palleteDisplay: !palleteDisplay })}
            boolean="false"
          ></span>
        </div>
        <form className={palleteDisplay ? "productFilterPallete" : "hidden"}>
          <section className="palleteColorWrapper">
            <span>컬러</span>
            <div>
              <ul>
                {colors.map(({ color, name, active }, index) => (
                  <Link
                    to={`/list/category=lip&${this.state.selectedColor
                      .map((el) => `color=${el}`)
                      .join("&")}`}
                  >
                    <li
                      className={
                        active ? "colorListToggle" : "colorListToggleWhite"
                      }
                      name={name}
                      key={name}
                      onClick={(e) => palleteButtonKeep(e, index)}
                    >
                      <button
                        name={name}
                        index={index}
                        style={{ backgroundColor: color }}
                      />
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </section>
          <section className="palleteSearchBoxWrapper">
            <div className="palleteSearchBox">
              <span>결과 내 검색</span>
              <div>
                <input></input>
                <button>검색</button>
              </div>
            </div>
          </section>
        </form>
        <section className={filterdColor}>
          <div>
            <ul>
              <li>
                <span className="filteredWordReset" onClick={palleteClear}>
                  초기화
                </span>
              </li>
              {colors.map(({ active, name }, index) => (
                <li>
                  <span
                    className={active ? "filterWord" : "hidden"}
                    onClick={(e) => palleteButtonKeep(e, index)}
                  >
                    컬러 : {name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
export default withRouter(ProductFilter);
