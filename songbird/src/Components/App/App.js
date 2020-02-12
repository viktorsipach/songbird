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
      random: 1,
      count: 5,
      description: null,
      isAnswered: false
    }
    this.handleClickNext = this.handleClickNext.bind(this);
    this.handleClickGameOver = this.handleClickGameOver.bind(this);
    this.isCorrect = this.isCorrect.bind(this);
  }
  
  handleClickNext() {
    if (this.state.isAnswered) {
      this.setState({
        round: this.state.round + 1,
        description: null,
        count: 5,
        isAnswered: false
      });
    }
   
  }
  handleClickGameOver() {
    this.setState({
      score: 0,
      round: 0,
      count: 5,
      description: null,
      isAnswered: false
    });
  }
  getDataRound() {
    const round = this.state.round;
    return birdsData[round];
  }

  isCorrect(id) {
    const round = this.state.round;
    const result = birdsData[round].find(item => item.id === id);
    if (result.id === this.state.random ) {
    this.setState({
      score: this.state.score + this.state.count,
      description: this.getDescription(id),
      isAnswered: true
    });
   }
   this.setState({
    count: this.state.count - 1,
    description: this.getDescription(id)
  });
  }
  getDescription(id) {
    return birdsData[this.state.round][id-1]
  }

  getRandomBird() {
    return this.getDataRound()[this.state.random];
  }

  render() {
    if (this.state.round < 6) {
      return (
        <div className="App">
          <Header score={this.state.score} round={this.state.round}/>
          <Random data={this.getRandomBird()}/>
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
