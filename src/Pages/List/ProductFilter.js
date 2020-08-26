import React, { Component } from "react";
import "./ProductFilter.scss";

export default class ProductFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      palleteDisplay: false,
      colors: [],
      selectedColor: {},
      filterdColor: "hidden",
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
    this.setState({ colors: newColors }, () => {
      let checkArr = this.state.colors.map((el) => el.active);
      if (!checkArr.filter((el) => el === true).includes(true)) {
        this.setState({ filterdColor: "hidden" });
      } else {
        this.setState({ filterdColor: "productFilteredName" });
      }
    });
  };

  palleteClear = () => {
    let newColors = [...this.state.colors];
    for (let color of newColors) color.active = false;
    this.setState({ colors: newColors, filterdColor: "hidden" });
  };

  render() {
    const {
      state: { palleteDisplay, colors, filterdColor },
      palleteButtonKeep,
      palleteClear,
    } = this;
    return (
      <div className="productFilter">
        <div className="productFilterName">
          <h2>Lip</h2>
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
                <span
                  className="filteredWordReset"
                  onClick={(e) => palleteClear(e)}
                >
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
