import React, { useState } from 'react';
import './css/Button.css';

// import { prependToMemberExpression } from '@babel/types';

export default function Button(props) {
    console.log('rendering button...', props)
    const [size] = useState(props.size);
    const [variant] = useState(props.variant);
    const [backgroundColor] = useState(props.backgroundColor);
    const [color] = useState(props.color);

    const style = {
        backgroundColor: backgroundColor,
        color: color
    };

    return (
    //   <button className={`btn-${variant} btn-${size}`}>{props.children}</button>
        <button className={`btn-${variant} btn-${size}`} style={style}>{props.children}</button>
    );
};
