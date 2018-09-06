import React from "react";
import "./Footer.css";
import { LogoIcon, LogoTxt } from "../Logo/Logo";
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import * as heart from '../../assets/heart.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: heart,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const Footer = props => (
  <div className="footer-container">
    <div className="links-and-logo-container">
      <LogoTxt fill="#fff" width="120" />
      <div className="footer-links-container">
        <ul className="footer-links">
          <li>
            <p>Create</p>
          </li>
          <li>
            <a onClick={() => props.onClickHint('newbtn')} className='fotter-clicker'>Button</a>
          </li>
          <li>
            <a onClick={() => props.onClickHint('newbadge')} className='fotter-clicker'>Badge</a>
          </li>
          <li>
            <a onClick={() => props.onClickHint('newhint')} className='fotter-clicker'>Hint</a>
          </li>
          <li>
            <a onClick={() => props.onClickHint('btn')} className='fotter-clicker'>Buttny</a>
          </li>
          <li>
            <Link to='/shorty' className='fotter-clicker'>Link Shortener</Link>
          </li>
        </ul>
        <ul className="footer-links">
          <li>
            <p>Resources</p>
          </li>
          <li>
            <a href="https://github.com/salehjarad/gitbutn" target='_blank'>Github</a>
          </li>
          <li>
            <a href="https://github.com/Salehjarad/gitbutn/wiki" target='_blank'>Help & Guidelines</a>
          </li>
          <li>
            <a href="https://github.com/Salehjarad/gitbutn/issues" target='_blank'>Issues & new ideas</a>
          </li>
          <li>
            <a href="https://github.com/Salehjarad/gitbutn/fork" target='_blank'>Fork & Add More Icons</a>
          </li>
        </ul>
        <ul className="footer-links">
          <li>
            <p>Feedback</p>
          </li>
          <li>
          <a href="https://github.com/salehjarad" className='img-with-a' target='_blank'>
              <img src='https://img.gitbutn.io/btn/?&icon=github&ico=fff&bgc=111111' width='20' alt='Become a patron'/>
              <span>Github</span>
            </a>
          </li>
          <li>
          <a href="https://www.twitter.com/salehjarad_" className='img-with-a' target='_blank'>
              <img src='https://img.gitbutn.io/btn/?&icon=twitter&ico=fff&bgc=111111' width='20' alt='Become a patron'/>
              <span>Twitter</span>
            </a>
          </li>
          <li>
            <a href="https://www.patreon.com/salehjarad" className='img-with-a' target='_blank'>
              <img src='https://img.gitbutn.io/btn/?&icon=patreon&ico=fff&bgc=111111' width='20' alt='Become a patron'/>
              <span>Become a patron</span>
            </a>
          </li>
          <li>
            <a href="https://paypal.me/salehjarad" className='img-with-a' target='_blank'>
            <img src='https://img.gitbutn.io/btn/?&icon=paypal&ico=fff&bgc=111111' width='20' alt='Become a patron'/>
            <span>Donate!</span>
            </a>
          </li>
          
        </ul>
      </div>
    </div>
    <div className='by-contet'>
    <p className="made-w">BUILD WITH</p>
    <Lottie
            options={defaultOptions}
            height={70}
            width={70}
            isStopped={false}
            isPaused={false}
          />
    <p className="made-w">BY SALEHJARAD &copy; 2018</p>

    </div>
  </div>
);

export default Footer;
