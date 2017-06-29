import React, { Component } from 'react';
import './App.css';

import Money from './Money'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          The price of your tickets is <Money minAmount={2000} currency="GBP" />
        </p>
        <p className="App-intro">
          The price of your tickets is <Money minAmount={2000} maxAmount={4000} currency="GBP" />
        </p>
      </div>
    );
  }
}

export default App;
