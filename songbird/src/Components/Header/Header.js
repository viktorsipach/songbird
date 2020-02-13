import React from 'react';
import './Header.scss';

function Header(props) {
    const arrPageItem = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы'];

    function isActive(index) {
        const round = props.round;
        return round === index ? "page-item active" : "page-item";
    }

    return (
        <header className="Header">
        <div className="Header__top-panel" >
          <h1 className="Header__logo">song<span>bird</span></h1>
    <h5>Score: <span className="Header__score">{props.score}</span></h5>
        </div>
        <ul className="Header__pagination">
         {arrPageItem.map((item,index) => {
            return (
                <li className={isActive(index)} key={index}>{item}</li>
            )
         })}
        </ul>
      </header>
    );
}

export default Header;