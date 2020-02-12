import React from 'react';
import './Button.scss';

function Button(props) {
    return (
        <button className={props.isActive ? "Button Active": "Button" }
            onClick={props.onClick}
            >{props.value}
        </button>
    ); 
}

export default Button;