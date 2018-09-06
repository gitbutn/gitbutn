import React, { Component } from 'react';
import { SliderPicker, MaterialPicker } from 'react-color';
import './Flags.css';
import Done from '../Done/Done';
import { checkType } from '../Actions';
export default class Flag extends Component {
    constructor(props){
        super(props);

        this.state = {
            text: 'GitButn',
            txtColor: '#fff',
            bgColor: '#BF4040',
            loading: false,
            done: false,
            shortUrl: ''
        }
    }

    onChangeText(e) {
        this.setState({
            text: e.target.value,
            done: false
        })
    }

    onChangeBgColor(hex) {
        this.setState({
            bgColor: hex.hex,
            done: false
        })
    }

    onChangeTextColor(hex) {
        this.setState({
            txtColor: hex.hex,
            done: false
        })
    }

    createFlagLink(){
        this.setState({
            loading: true
        })
        const { txtColor, bgColor, text } = this.state;
        const list = { 
            flag: text,
            fc: txtColor.replace('#', ''),
            bgc: bgColor.replace('#', '')
        }

        checkType('flag', list).then(res => {
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
            <div className='Flag'>
                <Done 
                    style={{marginBottom: '20px'}}
                    title='Create Flag Link'
                    doneclick={this.createFlagLink.bind(this)}
                    copyurl={this.copyUrl.bind(this)}
                    openurl={this.openUrl.bind(this)}
                    done={this.state.done}
                    loading={this.state.loading}
                    shorturl={this.state.shortUrl}
                />
                    <div className='flag-show' style={{backgroundColor: this.state.bgColor}}>
                        <p style={{color: this.state.txtColor}}>{this.state.text}</p>
                    </div>
                <div className='flag-container'>
                    <div className='flag-changer'>
                    <div className='flag-left-options'>
                        <div className='flag-slide-color'>
                            <SliderPicker color={this.state.bgColor} onChange={hex => this.onChangeBgColor(hex)}/>
                        </div>
                        <MaterialPicker color={this.state.bgColor} onChange={hex => this.onChangeBgColor(hex)}/>
                    </div>

                    <div className='flag-input-option'>
                        <input 
                            type='text'
                            placeholder='flag...'
                            value={this.state.text}
                            onChange={txt => this.onChangeText(txt)}
                        />
                    </div>

                        <div className='flag-left-options'>
                        <div className='flag-slide-color'>
                            <SliderPicker color={this.state.txtColor} onChange={hex => this.onChangeTextColor(hex)}/>
                        </div>
                        <MaterialPicker color={this.state.txtColor} onChange={hex => this.onChangeTextColor(hex)}/>
                    </div>
                    </div>
                </div>
            </div>
        );
    };
};
    