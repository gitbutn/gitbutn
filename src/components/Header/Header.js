import React from 'react';
import './Header.css';
import { LogoIcon, LogoTxt } from '../Logo/Logo';
import { Link } from 'react-router-dom';

const Header = props => (
    <div className='header-container-top'>
    <LogoTxt width='160' className='logotxt' fill='#fff' />
        {props.all ?
        <ul>
            <li>
                <button className='a-scroll' onClick={() => props.onClickHint('newbtn')}>New Button</button>
            </li>
            <li>
                <button className='a-scroll' onClick={() => props.onClickHint('newhint')}>New Hint</button>
            </li>
            <li>
                <button className='a-scroll' onClick={() => props.onClickHint('newbadge')}>New Badge</button>
            </li>
            <li>
                <button className='a-scroll' onClick={() => props.onClickHint('newflag')}>New Flage</button>
            </li>
            <li>
                <button className='a-scroll' onClick={() => props.onClickHint('btn')}>New Buttny</button>
            </li>
            <li>
                <Link className='a-scroll a-borderw' to='/icons'>Icons</Link>
            </li>
            <li>
                <Link className='a-scroll a-borderw' to='/shorty'>URL Shortener</Link>
            </li>
            <li>
                <span className='a-scroll a-borderw beta'>Beta</span>
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
            <span className='a-scroll a-borderw beta'>Beta</span>
        </li>
    </ul> 
        }
    </div>
);


export default Header;
    