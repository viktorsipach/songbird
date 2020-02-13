import React from 'react';
import './Choice.scss';

function Choice(props) {
    
    return (
        <ul className="Choice"  onClick= {(e) => props.onClick(e.target)}>
         {props.data.map(item => {
            return (
                <li className="Choice__item" key={item.id} value={item.id}
                ><span className="li-btn"></span>{item.name}</li>
            )
         })}
        </ul>
    );
}

export default Choice;