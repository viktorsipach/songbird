import React from 'react';
import './Button.scss';

function Button(props) {
    return (
        <button className="Button"
                onClick={props.onClick}
        >Next Level</button>
    ); 
}

export default Button;