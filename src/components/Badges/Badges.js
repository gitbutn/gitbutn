import React, { PureComponent } from 'react';
import { SliderPicker, MaterialPicker } from 'react-color';
import './Badges.css';
import PropTypes from 'prop-types';
import Joyride from 'react-joyride';
import Icons from '../Icons/Icons';
import IconItem from '../Iconssearch/Iconssearch';
import iconsArray from '../../assets/icons';
import Done from '../Done/Done';
import Lottie from  'lottie-react-web'
import * as toggel from '../../assets/ver.json';
import { checkType } from '../Actions/'

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


export default class Badges extends PureComponent {
    constructor(props){
        super(props);

        this.state = {
            lefttxt: 'hello',
            righttxt: 'world',
            lbgc: '#BF4040',
            rbgc: '#D27979',
            ltc: '#ffffff',
            rtc: '#ffffff',
            searchArray: [],
            iconSearch: '',
            addIcon: false,
            shortUrl: '',
            iconSearchStick: 'gitbutn',
            isToggled: false,
            loading: false,
            done: false,
            run: false,
            steps: [
              {
                target: '.badge-container-for-to',
                content: 'Start touring to help you',
                placement: 'left',
                styles: stylesForTooltip
              },
              {
                target: '.edit-badge-info-top',
                content: 'Left for badge left background color and right for badge right background color',
                placement: 'top',
                styles: stylesForTooltip,
              },
              {
                target: '.badges-container',
                content: 'Your changes will show up here',
                placement: 'top',
                styles: stylesForTooltip,
              },
              {
                target: '.left-title-color-tool',
                content: 'Change title and icon color',
                placement: 'top',
                styles: stylesForTooltip,
              },
              {
                target: '.title-tool',
                content: 'Change title value',
                placement: 'top',
                styles: stylesForTooltip,
              },
              {
                target: '.sub-tool',
                content: 'Change subtitle value',
                placement: 'top',
                styles: stylesForTooltip,
              },
              {
                target: '.icon-search-tool',
                content: 'Search for icons and click the icon to load it',
                placement: 'top',
                styles: stylesForTooltip,
              },
              {
                target: '.right-title-color-tool',
                content: 'Change subtitle color',
                placement: 'top',
                styles: stylesForTooltip,
              },
              {
                target: '.showver',
                content: 'Toggle, if green this will search title in npmjs for version and load it in subtitle if found',
                placement: 'top',
                styles: stylesForTooltip,
              },
              {
                target: '.create-link-tool',
                content: 'Finally :) , now you can create link for your awesome design!',
                placement: 'top',
                styles: stylesForTooltip,
                locale: {
                    last: 'Start'
                  }
              },
            ]
        }
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
    renderSerch(){
        var updatedList = iconsArray;
        updatedList = updatedList.filter((item) =>{
          return item.icon.toLowerCase().slice(0, this.state.iconSearch.length) === this.state.iconSearch.toLowerCase();
        });
        this.setState({searchArray: updatedList});
      }

      setIconFromSearch(e){
        this.setState({
          iconSearchStick: e,
          done: false
        });
        this.clearIconSearch();
      }

      clearIconSearch(){
        this.setState({
          iconSearch: ''
        })
      }

      renderSerchDivo(){
        if(this.state.iconSearch.length > 1) {
          return <div className='serch-container'>
            { this.state.searchArray.map((item, index) =>
            <IconItem 
              key={index}
              name={item.icon}
              patha={item.patha}
              pathb={item.pathb}
              pathc={item.pathc}
              pathd={item.pathd}
              pathe={item.pathe}
              iconItemClick={() => this.setIconFromSearch(item.icon)}
            />)}
            </div>
        }
      }

      onChangeIconSearch(sub) {
        this.setState({
          iconSearch: sub.target.value,
          done: false
        });
        this.renderSerch();
      }

    leftText(e){
        this.setState({
            lefttxt: e.target.value,
            done: false
        })
    }
    rightText(e){
        this.setState({
            righttxt: e.target.value,
            done: false
        })
    }

    changeRightBgColor(c) {
        this.setState({
            rbgc: c.hex,
            done: false
        })
    }

    changeLeftBgColor(c) {
        this.setState({
            lbgc: c.hex,
            done: false
        })
    }

    changeLeftTextColot(c) {
        this.setState({
            ltc: c.hex,
            done: false
        })
    }

    changeRightTextColor(c) {
        this.setState({
            rtc: c.hex,
            done: false
        })
    }

    showAndGo(){
        this.setState({
            addIcon: !this.state.addIcon
        })
    }


    removeIcon(){
        this.setState({
            iconSearchStick: ''
        })
    }

    createBadgeLink(){
        this.setState({
            loading: true
        })
        const { lefttxt, righttxt, iconSearchStick, ltc, rtc, lbgc, rbgc } = this.state;
        const list = {
            title: lefttxt,
            sub: righttxt,
            lco: lbgc.replace('#', ''),
            rco: rbgc.replace('#', ''),
            ltc: ltc.replace('#', ''), 
            rtc: rtc.replace('#', ''),
            icon: iconSearchStick,
            ver: this.state.isToggled ? 'true' : 'false'
        }

        checkType('badge', list).then(res => {
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

    handleClick = () => {
        this.setState({ isToggled: !this.state.isToggled, done: false })
    }



    render(){
        const defaultOptions = {
            loop: false,
            autoplay: true,
            animationData: toggel,
            direction: 1,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice',
            }
        }
        const { steps, run } = this.state;
        return(
            <div className='Badges'>
                <Joyride
                steps={steps}
                run={run}
                continuous
                showSkipButton
                spotlightPadding 
                />
            <div className='create-link-tool'>
            <Done
                title='Create Badge Link'
                doneclick={this.createBadgeLink.bind(this)}
                copyurl={this.copyUrl.bind(this)}
                openurl={this.openUrl.bind(this)}
                loading={this.state.loading}
                done={this.state.done}
                shorturl={this.state.shortUrl}
            />
            </div>
            <div className='badge-container-for-to'>
                <div className='edit-badge-info-top'>
                    <div className='slider-for-badges'>
                        <SliderPicker color={this.state.lbgc} onChange={hex => this.changeLeftBgColor(hex)} />
                    </div>
                    <div style={{marginRight: '10px'}}>
                        <MaterialPicker color={this.state.lbgc} onChange={hex => this.changeLeftBgColor(hex)} />
                    </div>

                    <MaterialPicker color={this.state.rbgc} onChange={hex => this.changeRightBgColor(hex)} />
                    <div className='slider-for-badges'>
                        <SliderPicker color={this.state.rbgc} onChange={hex => this.changeRightBgColor(hex)} />
                    </div>
                </div>


                <div className='badges-container'>
                    <div className='badge-left' style={{background: this.state.lbgc}}>
                        {this.state.iconSearch.length > 2 || this.state.iconSearchStick.length > 2 && 
                            <div className='badge-icon-content'>
                                <Icons icon={this.state.iconSearchStick} width='16' height='16' fill={this.state.ltc} logofill={this.state.ltc}/>
                            </div>
                        }
                        <p style={{color: this.state.ltc}}>{this.state.lefttxt}</p>
                    </div>
                    <div className='badge-right' style={{background: this.state.rbgc}}>
                        <p style={{color: this.state.rtc}}>{this.state.righttxt}</p>
                    </div>
                </div>


                <div className='edit-badge-info-bottom'>
                    <div className='slider-for-badges left-title-color-tool'>
                        <SliderPicker color={this.state.ltc} onChange={hex => this.changeLeftTextColot(hex)} />
                        <div style={{marginLeft: '10px', marginTop: '8px'}}>
                            <MaterialPicker color={this.state.ltc} onChange={hex => this.changeLeftTextColot(hex)}  />
                        </div>
                    </div>
                    <div className='badges-inputs'>
                        <input className='title-tool' type='text' placeholder='left text' value={this.state.lefttxt} onChange={e => this.leftText(e)} />
                        {!this.state.isToggled && 
                        <input className='sub-tool' type='text' placeholder='right text' value={this.state.righttxt} onChange={e => this.rightText(e)} />
                        }
                        <input className='icon-search-tool' placeholder='add icon to badge' value={this.state.iconSearch} onChange={e => this.onChangeIconSearch(e)} />
                        {this.state.iconSearchStick.length > 2 && 
                            <button onClick={this.removeIcon.bind(this)}>Remove Icon</button>
                        }
                    </div>
                    <div className='slider-for-badges right-title-color-tool'>
                    <SliderPicker color={this.state.rtc} onChange={hex => this.changeRightTextColor(hex)} />
                    <div style={{marginLeft: '10px', marginTop: '8px'}}>
                        <MaterialPicker color={this.state.rtc} onChange={hex => this.changeRightTextColor(hex)} />
                    </div>
                    </div>
                </div>
                <div className='bottom-icon-choice'>
                  <div className='list-on-badges'>
                    {this.renderSerchDivo()}
                  </div>
                </div>
                <div className='showver'>
                    <p>NPM / VERSION</p>
                    <div onClick={this.handleClick.bind(this)}>
                        <Lottie
                        direction={this.state.isToggled ? 1 : -1}
                        width={80}
                        height={80}
                        speed={3}
                        options={{
                        animationData: toggel,
                        loop: false,
                        }}
                        />
                    </div>
                </div>
                </div>
            </div>
        );
    };
};
    