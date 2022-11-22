import logo from './logo.svg';
import './App.css';
import React from 'react';

const nome = 'Icaro';
const classe = 'hello-class';
const element = <h1 className={classe}>Olá {nome} , você acaba de cair no genjutsu do REACT!</h1>;
function App() {
  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {element}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
