import React, { Component } from 'react';
import './App.css';

import Money from './Money'
import MoneyRange from './MoneyRange'

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          The price of your tickets is <Money amount={2000} currency="GBP" />
        </p>
        <p className="App-intro">
          The price of your tickets is <MoneyRange min={2000} max={4000} currency="GBP" />
        </p>
      </div>
    );
  }
}

export default App;
