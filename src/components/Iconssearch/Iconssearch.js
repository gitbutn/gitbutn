import React from 'react';

const ItemIconSearch = (props) => (
    <div className='icon-item' onClick={() => props.iconItemClick()}>
        <svg width={'18'} height={'18'} fill={'black'} version="1.1" id="Layer_1"
        version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox={props.type === 'sja' ? "0 0 24 24" : "0 0 1792 1792"} style={{ enableBackground: 'new 0 0 29.7 18.2', opacity: 0.8 }} xmlSpace="preserve">
            <path d={props.patha}/>
            <path d={props.pathb}/>
            <path d={props.pathc}/>
            <path d={props.pathd}/>
            <path d={props.pathe}/>
            <path d={props.pathf}/>
            <path d={props.pathg}/>
            <path d={props.pathh}/>
            <path d={props.pathi}/>
            <path d={props.pathj}/>
            <path d={props.pathk}/>
        </svg>
        <p>{props.name}</p>
    </div>
);

export default ItemIconSearch;