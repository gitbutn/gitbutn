import React from 'react';
import './Header.css';
import { LogoIcon, LogoTxt } from '../Logo/Logo';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
    state = {
        toggal: false
    }

    toggalHeader(){
        this.setState({
            toggal: !this.state.toggal
        })
    }

    onClickHint(get){
        console.log('ss')
        this.props.onClickHint(get);
    }

    render(){
        return(
            <div className='header-container-top'>
            <LogoTxt width='160' className='logotxt' fill='#fff' />
                {this.props.all ?
            <ul>
                <li>
                    <button className='a-scroll' onClick={() => this.onClickHint('newbtn')}>New Button</button>
                </li>
                <li>
                    <button className='a-scroll' onClick={() => this.onClickHint('newhint')}>New Hint</button>
                </li>
                <li>
                    <button className='a-scroll' onClick={() => this.onClickHint('newbadge')}>New Badge</button>
                </li>
                <li>
                    <button className='a-scroll' onClick={() => this.onClickHint('newflag')}>New Flage</button>
                </li>
                <li>
                    <button className='a-scroll' onClick={() => this.onClickHint('btn')}>New Buttny</button>
                </li>
                <li>
                    <Link className='a-scroll a-borderw' to='/icons'>Icons</Link>
                </li>
                <li>
                    <Link className='a-scroll a-borderw' to='/shorty'>URL Shortener</Link>
                </li>
                <li>
                    <a href='https://github.com/Salehjarad/gitbutn' target='_blank' className='a-scroll a-borderw beta'>Examples For Use</a>
                </li>
            </ul>
        : 
            <ul>
                <li>
                    <Link className='a-scroll a-borderw' to='/'>Home</Link>
                </li>
                <li>
                    <Link className='a-scroll a-borderw' to='/icons'>Icons</Link>
                </li>
                <li>
                    <Link className='a-scroll a-borderw' to='/shorty'>URL Shortener</Link>
                </li>
                <li>
                    <a href='https://github.com/Salehjarad/gitbutn' target='_blank' className='a-scroll a-borderw beta'>Examples For Use</a>
                </li>
            </ul> 
        }
    </div>
        );
    }
}
    