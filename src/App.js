import React, { Component } from 'react';
import Countdown from './components/Countdown'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Pomodoro Timer</h1>
        <Countdown />
      </div>
    );
  }
}

export default App;
