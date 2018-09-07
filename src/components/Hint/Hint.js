import React, { Component } from "react";
import "./Hint.css";
import IconType from "../IconHintType/IconHintType";
import PropTypes from 'prop-types';
import Joyride from 'react-joyride';
import { checkType } from '../Actions';
import Done from '../Done/Done';

const stylesForTooltip = {
  options: {
    zIndex: 3000,
    arrowColor: '#316dce',
    primaryColor: '#ffffff',
    textColor: '#ccc'
  },
  buttonClose: {
    display: 'none'
  },
  buttonNext: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    color: '#ffffff',
    border: 'none'
  },
  buttonBack: {
    color: '#ffffff'
  },
  tooltip: {
   backgroundColor: '#316dce',
   color: '#ffffff'
  },
}

export default class Hint extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textHint: "",
      showInputHint: false,
      showDrop: false,
      colorIs: "3884ff",
      iconType: "info",
      done: false,
      loading: false,
      shortUrl: '',
      run: false,
      steps: [
        {
          target: '.hint-sub-continer',
          content: 'Click here and type somthing...',
          placement: 'top',
          styles: stylesForTooltip
        },
        {
          target: '.shai',
          content: 'Click here to change hint type',
          placement: 'top',
          styles: stylesForTooltip,
          locale: {
            last: 'Start'
          }
        },
      ]
    };

    this.colors = {
      warning: "f77d05",
      info: "3884ff",
      danger: "ff4642",
      success: "26cb7c"
    };
  }

  static propTypes = {
    joyride: PropTypes.shape({
      callback: PropTypes.func
    })
  };

  static defaultProps = {
    joyride: {}
  };

  componentDidMount() {
    this.setState({
      run: true
    });
  }

  onChangeTextHint(e) {
    this.setState({
      textHint: this.hintText.value,
      done: false
    });
    this.hintText.addEventListener("keydown", e => {
      if (e.keyCode === 13) {
        this.setState({
          showInputHint: false
        });
      }
    });
  }

  blurText() {
    if (this.state.textHint.length <= 3) {
      this.setState({
        textHint: "Type Somthing Real!"
      });
    }
    this.setState({
      showInputHint: false,
      textHint: this.hintText.value
    });
  }


  makeItHint() {
    this.setState({
      iconType: "info",
      colorIs: this.colors.info,
      showDrop: !this.state.showDrop,
      done: false
    });
  }
  makeItSuccess() {
    this.setState({
      iconType: "success",
      colorIs: this.colors.success,
      showDrop: !this.state.showDrop,
      done: false
    });
  }
  makeItWarning() {
    this.setState({
      iconType: "warning",
      colorIs: this.colors.warning,
      showDrop: !this.state.showDrop,
      done: false
    });
  }
  makeItDanger() {
    this.setState({
      iconType: "danger",
      colorIs: this.colors.danger,
      showDrop: !this.state.showDrop,
      done: false
    });
  }

  hidDropDown() {
    this.setState({
      showDrop: !this.state.showDrop
    });
  }

  showUrl() {
    const { textHint, iconType } = this.state;
    let url = `&txt=${textHint}&type=${iconType}`;
    window.open(`http://localhost:8000/hint/?${url}`);
  }

  renderChoiceOfType() {
    if (!this.state.showDrop) return "";
    return (
      <div className="type-dropdown">
        <div
          className="item-type-dropdown"
          onClick={this.makeItHint.bind(this)}
        >
          <IconType type="info" />
          <p>Hint</p>
        </div>
        <div
          className="item-type-dropdown"
          onClick={this.makeItSuccess.bind(this)}
        >
          <IconType type="success" />
          <p>Success</p>
        </div>
        <div
          className="item-type-dropdown"
          onClick={this.makeItWarning.bind(this)}
        >
          <IconType type="warning" />
          <p>Warning</p>
        </div>
        <div
          className="item-type-dropdown"
          onClick={this.makeItDanger.bind(this)}
        >
          <IconType type="danger" />
          <p>Danger</p>
        </div>
      </div>
    );
  }


  createHintLink(){
      const { textHint, iconType } = this.state;
      const list = {txt: textHint, type: iconType}
      this.setState({
          loading: true
      });
      checkType('hint', list).then(res => {
          if(!res) {
              this.setState({
                  loading: false,
                  done: false
              })
          }
          this.setState({
              loading: false,
              done: true,
              shortUrl: res
          })
      }).catch((e) => {
        this.setState({
            loading: false,
            done: false
        })
      });
  }

  copyUrl() {
    var textField = document.createElement("textarea");
    textField.innerText = this.state.shortUrl;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  }

  openUrl(){
    window.open(this.state.shortUrl, '_blank')
  }

  render() {
    const { steps, run } = this.state;
    return (
      <div className="Hint">
       <Joyride
        steps={steps}
        run={run}
        continuous
        showSkipButton
        spotlightPadding 
        />
        <Done 
            title='Create Hint Link'
            doneclick={this.createHintLink.bind(this)}
            copyurl={this.copyUrl.bind(this)}
            openurl={this.openUrl.bind(this)}
            done={this.state.done}
            loading={this.state.loading}
            shorturl={this.state.shortUrl}
        />
        <div className="hint-sub-continer">
          <div
            className="left-stroke"
            style={{ backgroundColor: "#" + this.state.colorIs }}
          />
          <div className="hint-bg">
          <div className='shai'>
            <IconType
              onClick={this.hidDropDown.bind(this)}
              className="icon-hint-padding"
              type={this.state.iconType}
            />
        </div>
            {!this.state.showInputHint && (
              <div className="input-for-hints">
                <input
                  type="text"
                  ref={e => (this.hintText = e)}
                  placeholder="click here and type somthing!"
                  autoComplete="off"
                  value={this.state.textHint}
                  onChange={e => this.onChangeTextHint(e)}
                  onBlur={this.blurText.bind(this)}
                />
              </div>
            )}
            {this.state.showInputHint && (
              <p onClick={this.showInputAndHide.bind(this)}>
                {this.state.textHint}
              </p>
            )}
            {this.renderChoiceOfType()}
          </div>
        </div>
      </div>
    );
  }
}
