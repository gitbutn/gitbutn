import React, { Component } from "react";
import { TwitterPicker, SliderPicker } from "react-color";
import Arrow from "../Arrow/Arrow";
import Icons from "../Icons/Icons";
import IconItem from "../Iconssearch/Iconssearch";
import iconsArray from "../../assets/icons";

class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colorPack: [
        "#000000",
        "#525252",
        "#767676",
        "#868686",
        "#969696",
        "#d9d9d9",
        "#f1f1f1"
      ],
      showPicker1: false,
      showPicker2: false,
      showPickerTitle: false,
      titleColor: "#000000",
      subtitleColor: "#333333",
      txtBgColor: "#cccccc",
      iconbgcolor: "#999999",
      iconColor: "#000000",
      title: "",
      subtitle: "",
      iconSearch: "",
      iconSearchStick: "",
      searchArray: [],
      urlall: ""
    };

    this.setTextBgColor = this.setTextBgColor.bind(this);
  }

  componentDidMount() {
    this.setState({
      searchArray: iconsArray
    });
  }

  renderSerch() {
    var updatedList = iconsArray;
    updatedList = updatedList.filter(item => {
      return (
        item.icon.toLowerCase().slice(0, this.state.iconSearch.length) ===
        this.state.iconSearch.toLowerCase()
      );
    });
    this.setState({ searchArray: updatedList });
  }

  setIconFromSearch(e) {
    this.setState({
      iconSearchStick: e
    });
    this.clearIconSearch();
  }

  renderSerchDivo() {
    if (this.state.iconSearch.length > 1) {
      return (
        <div className="serch-container">
          {this.state.searchArray.map((item, index) => (
            <IconItem
              key={index}
              name={item.icon}
              patha={item.patha}
              pathb={item.pathb}
              pathc={item.pathc}
              pathd={item.pathd}
              pathe={item.pathe}
              pathf={item.pathf}
              pathg={item.pathg}
              pathh={item.pathh}
              pathi={item.pathi}
              pathj={item.pathj}
              pathk={item.pathk}
              type={item.type}
              iconItemClick={() => this.setIconFromSearch(item.icon)}
            />
          ))}
        </div>
      );
    }
  }

  showColorPicker1() {
    this.setState({
      showPicker1: !this.state.showPicker1
    });
  }
  showColorPicker2() {
    this.setState({
      showPicker2: !this.state.showPicker2
    });
  }

  setTextBgColor(color) {
    this.setState({
      txtBgColor: color.hex
    });
  }

  setIconBgColor(color) {
    this.setState({
      iconbgcolor: color.hex
    });
  }

  onChangeTitle(title) {
    this.setState({
      title: title.target.value
    });
  }

  onChangeSubTitle(sub) {
    this.setState({
      subtitle: sub.target.value
    });
  }

  onChangeIconSearch(sub) {
    this.setState({
      iconSearch: sub.target.value
    });
    this.renderSerch();
  }

  clearTitle() {
    this.setState({
      title: "",
      titleColor: "#000000"
    });
  }

  clearSubTitle() {
    this.setState({
      subtitle: ""
    });
  }

  clearIconSearch() {
    this.setState({
      iconSearch: ""
    });
  }

  hideAllPicker() {
    if (this.state.showPickerTitle) {
      this.setState({
        showPickerTitle: false
      });
    }
  }

  showTitleColorPicker() {
    this.setState({
      showPickerTitle: !this.state.showPickerTitle
    });
  }

  changeTitleColor(e) {
    this.setState({
      titleColor: e.hex
    });
  }

  changeSubTitleColor(e) {
    this.setState({
      subtitleColor: e.hex
    });
  }

  changeIconColor(e) {
    this.setState({
      iconColor: e.hex
    });
  }

  copyUrl() {
    var textField = document.createElement("textarea");
    textField.innerText = this.state.urlall;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  }

  render() {
    return (
      <div className="all-container">
        <div className="options">
          {/* Left Button Bg Color*/}
          {this.state.showPicker1 && (
            <div className="slider-picker-style-all">
              <div className="slider-picker-style">
                <div className="slider-conter">
                  <SliderPicker
                    onChange={e => this.setIconBgColor(e)}
                    color={this.state.iconbgcolor}
                  />
                </div>
                <TwitterPicker
                  colors={this.state.colorPack}
                  triangle="hide"
                  onChange={e => this.setIconBgColor(e)}
                  color={this.state.iconbgcolor}
                />
              </div>
              <Arrow width="30" className="arrow-top-left" fill={"#ccc"} />
            </div>
          )}

          <div className="btn-container">
            <div
              className="iconbg"
              onClick={this.showColorPicker1.bind(this)}
              style={{ backgroundColor: this.state.iconbgcolor }}
            >
              <Icons
                icon={this.state.iconSearchStick}
                width="120"
                height="120"
                fill={this.state.iconColor}
                logofill={this.state.iconColor}
              />
            </div>
            <div
              className="txtbg"
              style={{ backgroundColor: this.state.txtBgColor }}
              onClick={this.showColorPicker1.bind(this)}
            >
              <h3 style={{ color: this.state.titleColor }}>
                {this.state.title || "Button Title"}
              </h3>
              <p style={{ color: this.state.subtitleColor }}>
                {this.state.subtitle || "SubTitle"}
              </p>
            </div>
          </div>

          {/* Right Button Bg Color*/}
          {this.state.showPicker1 && (
            <div className="slider-picker-style-all">
              <Arrow width="30" className="arrow-top-right" fill={"#ccc"} />
              <div className="slider-picker-style">
                <div className="slider-conter">
                  <SliderPicker
                    onChange={e => this.setTextBgColor(e)}
                    color={this.state.txtBgColor}
                  />
                </div>
                <TwitterPicker
                  colors={this.state.colorPack}
                  triangle="hide"
                  onChange={e => this.setTextBgColor(e)}
                  color={this.state.txtBgColor}
                />
              </div>
            </div>
          )}
        </div>

        <div className="pickers-container">
          {this.state.showPicker1 && (
            <div className="icon-left-container">
              <div className="icon-left-colors-container">
                <div style={{ marginBottom: "10px" }}>
                  <TwitterPicker
                    onChange={e => this.changeIconColor(e)}
                    color={this.state.iconColor}
                    colors={this.state.colorPack}
                    triangle="hide"
                  />
                </div>
                <div style={{ marginBottom: "5px" }}>
                  <SliderPicker
                    color={this.state.iconColor}
                    onChange={e => this.changeIconColor(e)}
                  />
                </div>
              </div>
              <div className="icon-cho-holder">
                <Arrow
                  width="30"
                  height="30"
                  fill="#ccc"
                  className="icon-arrow-top"
                />
                <div className="icon-input-holder">
                  <div className="subtext-input">
                    <div className="colorValue" />

                    <input
                      type="text"
                      ref={s => (this.iconsearchtxt = s)}
                      value={this.state.iconSearch}
                      placeholder="Search For Icons"
                      autoComplete="off"
                      onChange={e => this.onChangeIconSearch(e)}
                    />
                    <img
                      src={require("../../assets/trash.svg")}
                      width="18"
                      className="trash-text"
                      style={{
                        display: this.state.subtitle.length >= 3 ? "" : ""
                      }}
                      onClick={this.clearIconSearch.bind(this)}
                    />
                  </div>
                  <div className="bottom-icon-choice-w">
                    {this.renderSerchDivo()}
                  </div>
                </div>
              </div>
            </div>
          )}
          {this.state.showPicker1 && (
            <div
              className="color-picker-text"
              style={{ display: this.state.showPicker1 ? "block" : "block" }}
            >
              <Arrow width="30" className="arrow" fill={"#ccc"} />
              <div className="txt-div-container">
                {/* inputs color and picker */}
                <div
                  className="inputs-holder-text"
                  style={{ backgroundColor: "#ccc" }}
                >
                  <div className="text-input-container">
                    <div className="text-input">
                      <div
                        className="colorValue"
                        onClick={() => this.showTitleColorPicker()}
                        style={{ backgroundColor: this.state.titleColor }}
                        onClick={this.showTitleColorPicker.bind(this)}
                      />

                      <input
                        type="text"
                        ref={t => (this.title = t)}
                        value={this.state.title}
                        placeholder="Button Title"
                        autoComplete="off"
                        onChange={e => this.onChangeTitle(e)}
                      />
                      <img
                        src={require("../../assets/trash.svg")}
                        width="18"
                        className="trash-text"
                        onClick={this.clearTitle.bind(this)}
                        style={{
                          display: this.state.title.length >= 3 ? "" : ""
                        }}
                      />
                    </div>
                  </div>

                  <div className="subtext-input">
                    <div
                      className="colorValue"
                      style={{ backgroundColor: this.state.subtitleColor }}
                    />

                    <input
                      type="text"
                      ref={s => (this.subtitle = s)}
                      value={this.state.subtitle}
                      placeholder="Subtitle"
                      autoComplete="off"
                      onChange={e => this.onChangeSubTitle(e)}
                    />
                    <img
                      src={require("../../assets/trash.svg")}
                      width="18"
                      className="trash-text"
                      style={{
                        display: this.state.subtitle.length >= 3 ? "" : ""
                      }}
                      onClick={this.clearSubTitle.bind(this)}
                    />
                  </div>
                </div>
                <div
                  className="colors-packger"
                  style={{ backgroundColor: "#ccc" }}
                >
                  <div style={{ marginBottom: "5px" }}>
                    <TwitterPicker
                      onChange={e => this.changeTitleColor(e)}
                      color={this.state.titleColor}
                      colors={this.state.colorPack}
                      triangle="hide"
                    />
                  </div>
                  <div style={{ marginBottom: "5px" }}>
                    <SliderPicker
                      color={this.state.titleColor}
                      onChange={e => this.changeTitleColor(e)}
                    />
                  </div>
                  <div style={{ marginBottom: "5px" }}>
                    <TwitterPicker
                      onChange={e => this.changeSubTitleColor(e)}
                      color={this.state.subtitleColor}
                      colors={this.state.colorPack}
                      triangle="hide"
                    />
                  </div>
                  <div style={{ marginBottom: "5px" }}>
                    <SliderPicker
                      color={this.state.subtitleColor}
                      onChange={e => this.changeSubTitleColor(e)}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <button className="quqEwa" onClick={() => this.quoqAll()}>
          Click
        </button>
      </div>
    );
  }
}

export default Button;
