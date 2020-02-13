import React,{Fragment} from 'react';
import './App.scss';
import birdsData from '../../birdsData';
import Header from '../Header/Header';
import Random from '../Random/Random';
import Choice from '../Choice/Choice';
import Description from '../Description/Description';
import Button from '../Button/Button';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      score: 0, 
      round: 0,
      count: 5,
      description: null,
      isAnswered: false,
      random: this.getRandomNumber(),
    }
    this.handleClickNext = this.handleClickNext.bind(this);
    this.handleClickGameOver = this.handleClickGameOver.bind(this);
    this.isCorrect = this.isCorrect.bind(this);
  }
  
  
  handleClickNext() {
    if (this.state.isAnswered) {
      document.querySelectorAll('.li-btn').forEach(item => item.style.backgroundColor = '#444');
      this.setState({
        round: this.state.round + 1,
        description: null,
        count: 5,
        isAnswered: false,
        random: this.getRandomNumber()
      });
    }
  }
  
  handleClickGameOver() {
    this.setState({
      score: 0,
      round: 0,
      count: 5,
      description: null,
      isAnswered: false,
      random: this.getRandomNumber()
    });
  }
  
  getRandomNumber() {
    function randomInteger(min, max) {
      let rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
    }
    const randomNumber = randomInteger(0,5);
    return randomNumber;
  }

  getDataRound() {
    const round = this.state.round;
    return birdsData[round];
  }

  getDescription(id) {
    return birdsData[this.state.round][id-1]
  }

  getRandomBird() {
    const round = this.state.round;
    const random = this.state.random;
    return birdsData[round][random];
  }

  isCorrect(id) {
    if (!this.state.isAnswered) {
      const round = this.state.round;
      const result = birdsData[round].find(item => item.id === id.value);
      if (result.id === (this.state.random + 1)) {
          id.firstChild.style.backgroundColor = 'rgb(8, 165, 118)';
          this.setState({
            score: this.state.score + this.state.count,
            description: this.getDescription(id.value),
            isAnswered: true
          });
     } else {
      id.firstChild.style.backgroundColor = 'red';
      this.setState({
          count: this.state.count - 1,
          description: this.getDescription(id.value)
      });
     }
    } else {
      this.setState({
        description: this.getDescription(id.value)
    });
    }
  }

  render() {
    const lastRound = 6;

    if (this.state.round < lastRound) {
      return (
        <div className="App">
          <Header score={this.state.score} round={this.state.round}/>
          <Random data={this.getRandomBird()}
                  isAnswer ={this.state.isAnswered} />
          <div className="Container">
            <Choice data={this.getDataRound()} onClick= { this.isCorrect }/>
            <Description info={this.state.description}/>
          </div>
          <Button  onClick= { this.handleClickNext }
                   value = {'Next Level'}
                   isActive = {this.state.isAnswered}
          />
        </div>
      );
    }
    return (
      <Fragment>
        <Header score={this.state.score}/>
        <div className='Gameover'>
          <h2>Поздравляем!</h2>
          <p>Вы прошли викторину и набрали {this.state.score} из 30 возможных баллов.</p>
          <Button onClick= {this.handleClickGameOver} isActive = {true}
          value = {'Попробовать еще раз!'} />
        </div>
      </Fragment>
    ); 
  }; 
}

export default App;
