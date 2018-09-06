import React, { Component } from 'react';
import './ShowAllIcons.css';
import { LogoTxt } from '../Logo/Logo';
import IconsArray from '../../assets/icons';
import IconItem from '../Iconssearch/IconSearchAll';
import Header from '../Header/Header';

export default class ShowAllIcons extends Component {
    constructor(props){
        super(props);

        this.state = {
            icons: [],
            seatchForIcon: '',
            showCopy: false
        }
    }

    componentDidMount(){
        this.setState({
            icons: IconsArray,
        })
    }
    renderSerch(){
        var updatedList = IconsArray;
        updatedList = updatedList.filter((item) =>{
          return item.icon.toLowerCase().slice(0, this.state.seatchForIcon.length) === this.state.seatchForIcon.toLowerCase();
        });
        this.setState({icons: updatedList});
      }

    copyName(name){
        var textField = document.createElement('textarea')
        textField.innerText = name
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove();
        this.setState({
            showCopy: true
        }, () => {
            setTimeout(() => {
                this.setState({
                    showCopy: !this.state.showCopy
                })
            }, 1200);
        });
    }

    renderAllIcons(){
        return this.state.icons.map((item, index) => {
            return (
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
                iconItemClick={() => this.copyName(item.icon)}
            />
        );
        });
    }

    onChangeAllIconSearch(e){
        this.setState({
            seatchForIcon: e.target.value
        }, () => {
            this.renderSerch()
        })
    }

    onClickHint(){
        this.props.history.push('/');
    }

    render(){
        return(
            <div className='ShowAllIcons'>
            <div className='copy-show-hint' style={{display: this.state.showCopy ? '' : 'none'}}>
                <p>Copied To Clipboard</p>
            </div>
                <div className='header-icons-comp' style={{filter: this.state.showCopy ? 'blur(4px)' : ''}}>
                    <Header all={false}/>
                </div>
                <div className='search-icons-comp' style={{filter: this.state.showCopy ? 'blur(4px)' : ''}}>
                    <input 
                        type='text'
                        value={this.state.seatchForIcon}
                        placeholder='Serach For Icone...'
                        onChange={e => this.onChangeAllIconSearch(e)}
                    />
                </div>
                <div className='show-all-icons-comp' style={{filter: this.state.showCopy ? 'blur(4px)' : ''}}>
                    {this.renderAllIcons()}
                </div>
            </div>
        );
    };
};
    