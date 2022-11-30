// src/App.js
import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.handleButtonOne = this.handleButtonOne.bind(this);
    this.handleButtonTwo = this.handleButtonTwo.bind(this);
    this.handleButtonThree = this.handleButtonThree.bind(this);
    
    this.state = {
      clicksBtn1: 0,
      clicksBtn2: 0,
      clicksBtn3: 0,
    };
  }

  handleButtonOne() {
    this.setState((previousState)=>({
      clicksBtn1: previousState.clicksBtn1 +1,
    }));
  }

  handleButtonTwo() {
    this.setState((previousState)=>({
      clicksBtn2: previousState.clicksBtn2 +1,
    }));
  }

  getBtnCollor = (num) => {
    return num%2 === 0 ? 'green' : 'white';
  };

  handleButtonThree() {
    this.setState((previousState)=>({
      clicksBtn3: previousState.clicksBtn3 +1,
    }));
  }
  render() {
    const { clicksBtn1, clicksBtn2, clicksBtn3 } = this.state;
    return (
      <div>
        <button type='button' style={{backgroundColor: this.getBtnCollor(clicksBtn1)}} onClick={ this.handleButtonOne }>{`O Botão 1 foi clicado ${clicksBtn1} vezes`}</button>
        <button type='button' style={{backgroundColor: this.getBtnCollor(clicksBtn2)}} onClick={ this.handleButtonTwo }>{`O Botão 2 foi clicado ${clicksBtn2} vezes`}</button>
        <button type='button' style={{backgroundColor: this.getBtnCollor(clicksBtn3)}} onClick={ this.handleButtonThree }>{`O Botão 3 foi clicado ${clicksBtn3} vezes`}</button>
      </div>
    );
  }
}

export default App;