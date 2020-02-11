import React from 'react';
import './Choice.scss';

function Choice(props) {
    const arrPageItem = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы'];

    return (
        <ul className="Choice">
         {arrPageItem.map((item,index) => {
            return (
                <li className="Choice__item" key={index}><span className="li-btn"></span>{item}</li>
            )
         })}
        </ul>
    );
}

export default Choice;