import React from 'react';
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
    this.state = { score: 0 }
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.setState({
      score: this.state.score + 1
    });
  }
  
  render() {
    return (
      <div className="App">
        <Header score={this.state.score}/>
        <Random />
        <div className="Container">
          <Choice />
          <Description info={birdsData[1][0]}/>
        </div>
        <Button onClick= {this.handleClick} />
      </div>
    );
  }; 
}

export default App;
