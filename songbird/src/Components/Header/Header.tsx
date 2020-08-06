import React from 'react';
import './Header.scss';

function Header(props:any) {
    const arrPageItem = ['Разминка', 'Утиные', 'Фазановые', 'Певчие птицы', 'Хищные птицы', 'Морские птицы'];

    function isActive(index:number) {
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