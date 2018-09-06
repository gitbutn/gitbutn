import React from 'react';

const Arrow = (props) => (
<svg 
width={props.width}
height={props.height}
fill={props.fill}
{...props}
version="1.1" id="Layer_1" 
xmlns="http://www.w3.org/2000/svg" 
xmlnsXlink="http://www.w3.org/1999/xlink" 
x="0px" y="0px"
version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 29.7 18.2" style={{ enableBackground: 'new 0 0 29.7 18.2' }} xmlSpace="preserve">
<path d="M15,0.1c0-0.1-0.2-0.1-0.2,0c-0.6,1.5-1.6,3.8-3.2,6.4C10.1,9.2,1.2,16.7,0,18c-0.1,0.1,0,0.2,0.1,0.2h29.5
	c0.1,0,0.2-0.1,0.1-0.2c-1.2-1.3-10-8.8-11.6-11.5C16.6,3.9,15.6,1.6,15,0.1z"/>
</svg>

);

export default Arrow;