import React from 'react';
import './Choice.scss';

function Choice(props) {
    
    return (
        <ul className="Choice">
         {props.data.map((item,index) => {
            return (
                <li className="Choice__item" key={item.id} value={item.id}
                onClick= {(e) => props.onClick(e.target.value)}
                ><span className="li-btn"></span>{item.name}</li>
            )
         })}
        </ul>
    );
}

export default Choice;