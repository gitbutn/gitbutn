import React from 'react';
import Lottie from 'react-lottie';
import { Copy, OpenWindow } from '../Icons/CopyAndOpen';
import * as sja from '../../assets/sja.json';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: sja,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

const Done = props => (
    <div className="copy-lovy" style={{marginBottom: '20px'}}>
    {!props.done ? (
      <div className="copy-link-app-container">
        {!props.loading ? (
          <div className="copy-link-app-container-in">
            <p>{props.title}</p>
            <button className="copy-btn-in-app" onClick={props.doneclick}>Done</button>
          </div>
        ) : (
          <Lottie
            options={defaultOptions}
            height={30}
            width={30}
            isStopped={false}
            isPaused={false}
          />
        )}
      </div>
    ) : (
      <div className="copy-link-app-container">
        <div
          helpo="Copy URL"
          onClick={props.copyurl}
          className="copy-btn-to-copy tct-tt"
        >
          <Copy width="20" fill="#fff" />
        </div>
        <p>{props.shorturl.split("://")[1]}</p>
        <div
          helpo="Open Link"
          onClick={props.openurl}
          className="copy-btn-to-copy tct-tt"
        >
          <OpenWindow width="20" fill="#fff" />
        </div>
      </div>
    )}
  </div>
);


export default Done;