import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="top-panel" >
          <h1 className="logo">long<span>bird</span></h1>
          <h5>Score: <span className="score">0</span></h5>
        </div>
        <ul className="pagination">
          <li className="page-item">Разминка</li>
          <li className="page-item">Воробьиные</li>
          <li className="page-item">Лесные птицы</li>
          <li className="page-item">Певчие птицы</li>
          <li className="page-item">Хищные птицы</li>
          <li className="page-item">Морские птицы</li>
        </ul>
      </header>
      <div className="random-bird"></div>
      <div className="container">
        <div className="select"></div>
        <div className="description"></div>
      </div>
      <button className="btn">Next Level</button>
    </div>
  );
}

export default App;
