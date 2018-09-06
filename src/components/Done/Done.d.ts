import React from 'react';

interface DoneProps {
    doneclick: () => void,
    copyurl: () => void,
    openurl: () => void,
    shortUrl: string,
    loading: boolean,
    done: boolean,
    title: string
}

declare class Done extends React.Component<DoneProps>{};


export default Done;