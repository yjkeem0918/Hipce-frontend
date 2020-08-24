import React, { Component } from "react";
import "./ProductFilter.scss";

export default class ProductFilter extends Component {
  constructor() {
    super();

    this.state = {
      palleteDisplay: "hidden",
      palleteDisplay: "hidden",
      colors: [...colorRange],
      filterdColor: "hidden",
      colors2: [...colorRange].map((el) => ({ ...el, active: "false" })),
      colors3: [...colorRange].forEach((el) => ({ ...el, active: "false" })),
    };
    for (let color of this.state.colors) color.active = false;

    // this.state = {
    //     palleteDisplay: fals,
    //     colors: [...colorRange].forEach(el => el.active = false),
    //     filterdColor: false,
    // }
    // Results.map(obj=> ({ ...obj, Active: 'false' }))
  }

  palleteDisplayChange = (e) => {
    e.target.boolean = false
      ? this.setState({ palleteDisplay: "hidden" })
      : this.setState({ palleteDisplay: "productFilterPallete" });
    e.target.boolean = true;
  };

  palleteButtonKeep = (e, index) => {
    e.preventDefault();
    let newColors = [...this.state.colors];
    newColors[index].active = !newColors[index].active;
    this.setState({ colors: newColors });

    if (this.state.filterdColor === "hidden") {
      this.setState({ filterdColor: "productFilteredName" });
    }
  };

  palleteClear = () => {
    let newColors = [...this.state.colors];
    for (let color of newColors) color.active = false;
    this.setState({ colors: newColors, filterdColor: "hidden" });
  };

  render() {
    console.log("color3", this.state.colors3);
    console.log("color2", this.state.colors2);
    console.log("color1", this.state.colors);
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
                    className={
                      active ? "colorListToggle" : "colorListToggleWhite"
                    }
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
