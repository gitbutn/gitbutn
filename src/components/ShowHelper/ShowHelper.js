import React from 'react';
import './ShowHelper.css';
import { LogoTxt } from '../Logo/Logo';
export default class ShowHelper extends React.Component {

    render(){
        return(
            <div className='show-if-mb'>
            <LogoTxt width='200' fill='#fff'/>
                <div className='show-if-mb-container'>
                    <p className='show-help-mon-content'>
                        built for developers to let them make awesome buttons and badges flags and small buttons for README.md in github, or you can call it as an image from
                        any where
                        and a link to the svg design will be created after you design it, not for mobile use.
                    </p>
                    <p className='nfmu'>Not For Mobile Use</p>
                    <a href='https://github.com/salehjarad/gitbutn'>What Can I Make With GitButn</a>
                </div>
            </div>
        );
    }
}