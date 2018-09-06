import React, { Component } from 'react';
import './Smallbtn.css';
import { SliderPicker, MaterialPicker } from 'react-color';
import Icon from '../Icons/Icons';
import iconsArray from '../../assets/icons';
import IconItem from '../Iconssearch/Iconssearch';
import Done from '../Done/Done';
import { checkType } from '../Actions'
export default class SmallBtn extends Component {
    constructor(props){
        super(props);

        this.state = {
            iconColor: '#fff',
            bgColor: '#9179D2',
            iconSearch: '',
            iconSearchStick: 'gitbutn',
            loading: false,
            done: false,
            shortUrl: '',
            searchArray: []
        }
    }

    componentDidMount(){
        this.setState({
          searchArray: iconsArray
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
        });
        this.clearIconSearch();
      }
    
      searchForIcon(e){
          this.setState({
            iconSearch: e.target.value
          }, () => {
              this.renderSerch()
          })
      }

      renderSerchDivo(){
        if(this.state.iconSearch.length > 1) {
          return <div className='serch-container'>
            { this.state.searchArray.map((item, index) => <IconItem 
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

      clearIconSearch(){
          this.setState({
            iconSearch: ''
          })
      }


      onChangeSmallBtnBg(hex) {
          this.setState({
              bgColor: hex.hex
          })
      }

      onChangeSmallBtnIcon(hex) {
          this.setState({
              iconColor: hex.hex
          })
      }

      createBtnLink(){
        const { iconSearchStick, iconColor, bgColor } = this.state;
        const list = {
            icon: iconSearchStick,
            ico: iconColor.replace('#', ''),
            bgc: bgColor.replace('#', '')
        }
        this.setState({
            loading: true
        });
        checkType('btn', list).then(res => {
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

    render(){
        return(
            <div className='Small-Btn'>
                <Done 
                    style={{marginBottom: '20px'}}
                    title='Create Buttony Link'
                    doneclick={this.createBtnLink.bind(this)}
                    copyurl={this.copyUrl.bind(this)}
                    openurl={this.openUrl.bind(this)}
                    done={this.state.done}
                    loading={this.state.loading}
                    shorturl={this.state.shortUrl}
                />
                <div className='smallbtn-view' style={{backgroundColor: this.state.bgColor}}>
                    <Icon icon={this.state.iconSearchStick} width='1em' height='1em' fill={this.state.iconColor} logofill={this.state.iconColor} />
                </div>
                <div className='smallbtn-container'>
                   <div className='smallbtn-left-option'>
                    <SliderPicker color={this.state.bgColor} onChange={hex => this.onChangeSmallBtnBg(hex)} />
                    <MaterialPicker color={this.state.bgColor} onChange={hex => this.onChangeSmallBtnBg(hex)}/>
                   </div>
                   <div className='smallbtn-middel-option'>
                        <input type='text' placeholder='search icons'
                        value={this.state.iconSearch}
                        onChange={e => this.searchForIcon(e)}
                        />
                        {this.renderSerchDivo()}
                   </div>
                   <div className='smallbtn-right-option'>
                   <SliderPicker color={this.state.iconColor} onChange={hex => this.onChangeSmallBtnIcon(hex)}/>
                    <MaterialPicker color={this.state.iconColor} onChange={hex => this.onChangeSmallBtnIcon(hex)}/>
                   </div>
                </div>
            </div>
        );
    };
};
    