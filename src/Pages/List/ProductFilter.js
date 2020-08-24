import React, { Component } from "react";
import "./ProductFilter.scss";

export default class ProductFilter extends Component {
  constructor() {
    super();

    this.state = {
      palleteDisplay: "hidden",
      colors: [...colorRange].map((color) => ({ ...color, active: false })),
      filterdColor: "hidden",
      colors3: [...colorRange].forEach((el) => ({ ...el, active: false })),
    };

    // this.state = {
    //     palleteDisplay: fals,
    //     colors: [...colorRange].forEach(el => el.active = false),
    //     filterdColor: false,
    // }
    // Results.map(obj=> ({ ...obj, Active: 'false' }))
  }

  palleteDisplayChange = () => {
    // this.setState({});
    this.state.palleteDisplay === "hidden"
      ? this.setState({ palleteDisplay: "productFilterPallete" })
      : this.setState({ palleteDisplay: "hidden" });
  };

  palleteButtonKeep = (e, index) => {
    e.preventDefault();
    let checkArr = this.state.colors.map((el) => el.active);
    let newColors = [...this.state.colors];
    newColors[index].active = !newColors[index].active;
    this.setState({ colors: newColors });

    if (this.state.filterdColor === "hidden") {
      this.setState({ filterdColor: "productFilteredName" });
    }
    for (let i = 0; i < checkArr.length; i++) {
      if ((checkArr[i] = true)) {
        return;
      } else if ((checkArr[i] = false)) {
        console.log(checkArr[i]);
        this.setState({ filterdColor: "hidden" });
      }
    }
  };

  palleteClear = () => {
    let newColors = [...this.state.colors];
    for (let color of newColors) color.active = false;
    this.setState({ colors: newColors, filterdColor: "hidden" });
  };

  render() {
    return (
      <div className="productFilter">
        <div className="productFilterName">
          <h2>Lip</h2>
          <span
            onClick={(e) => this.palleteDisplayChange(e)}
            boolean="false"
          ></span>
        </div>
        <form className={this.state.palleteDisplay}>
          <section className="palleteColorWrapper">
            <span>컬러</span>
            <div>
              <ul>
                {this.state.colors.map(({ color, name, active }, index) => (
                  <li
                    // className={
                    //   active ? "colorListToggle" : "colorListToggleWhite"
                    // }
                    name={name}
                    key={name}
                    onClick={(e) => this.palleteButtonKeep(e, index)}
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
        <section className={this.state.filterdColor}>
          <div>
            <ul>
              <li>
                <span
                  className="filteredWordReset"
                  onClick={(e) => this.palleteClear(e)}
                >
                  초기화
                </span>
              </li>
              {this.state.colors.map(({ active, name }, index) => (
                <li>
                  <span
                    className={active ? "filterWord" : "hidden"}
                    onClick={(e) => this.palleteButtonKeep(e, index)}
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
//sample data
const colorRange = [
  { color: "#b12a23", name: "Red" },
  { color: "#dc6b2f", name: "Oragne" },
  { color: "#d6ae9a", name: "Beige" },
  { color: "#dd7d88", name: "Pink" },
  { color: "#835248", name: "Brown" },
  { color: "#ef5a41", name: "Coral" },
  { color: "#b0718d", name: "Purple" },
  { color: "#b70316", name: "Rose" },
  { color: "#915f6d", name: "Mauve" },
];
