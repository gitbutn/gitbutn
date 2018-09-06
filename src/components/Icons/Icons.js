import React from 'react';
import iconsArray from '../../assets/icons';
import { LogoIcon } from '../Logo/Logo';


const Icons = (props) => {
  let icon = iconsArray.find(o => o.icon === props.icon);
  if(icon !== undefined) {
      return <svg 
      width={props.width}
      height={props.height}
      fill={props.fill}
      {...props}
      version="1.1" id="Layer_1" 
      xmlns="http://www.w3.org/2000/svg" 
      xmlnsXlink="http://www.w3.org/1999/xlink" 
      x="0px" y="0px"
      version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
           viewBox="0 0 24 24" style={{ enableBackground: 'new 0 0 29.7 18.2', fill: props.fill }} xmlSpace="preserve">
      <path d={icon.patha}/>
      <path d={icon.pathb}/>
      <path d={icon.pathc}/>
      <path d={icon.pathd}/>
      <path d={icon.pathe}/>
      <path d={icon.pathf}/>
      <path d={icon.pathg}/>
      <path d={icon.pathh}/>
      <path d={icon.pathi}/>
      <path d={icon.pathj}/>
      </svg>
    }
    return <LogoIcon width={props.width} height={props.height} fill={props.logofill}/>
};

export default Icons;