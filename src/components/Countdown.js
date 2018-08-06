import React, { Component } from 'react'
import Clock from './Clock'

const TIME = 1500;

export default class Countdown extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      time: TIME,
      isRunning: false,
      hasStarted: false,
      hasEnded: false
    }
  }

  start = () => {
    if (this.state.isRunning) return;
    this.setState({isRunning: true, hasStarted: true})
    this.interval = setInterval(this.handleInterval, 1000)
  }

  handleInterval = () => {
    var nextTime = this.state.time - 1;
    if (nextTime > 0) {
      this.setState({time: this.state.time - 1})
    } else {
      this.setState({time: 0, isRunning: false, hasEnded: true})
      clearInterval(this.interval);
    }
  }

  reset = () => {
    clearInterval(this.interval);
    this.setState({
      time: TIME, 
      isRunning: false,
      hasStarted: false,
      hasEnded: false
    })
  }

  togglePause = () => {
    if (this.state.isRunning) {
      clearInterval(this.interval);
      this.setState({isRunning: false})
    } else {
      this.start();
    }
  }

  render() {
    const { time, isRunning, hasStarted, hasEnded } = this.state;

    const StartButton = () => <button onClick={this.togglePause}>Start</button>
    const ToggleButton = () => (
      <button onClick={this.togglePause}>
        {isRunning ? "Pause" : "Start"}
      </button>
    )
    const StartState = () => (
      <div>
        <div>25min</div>
        <StartButton />
      </div>
    )

    const ClockState = () => (
      <div>
        <Clock timeInSeconds={time}/>
        <ToggleButton />
      </div>
    )

    const DoneState = () => (
      <div>
        DONE!
        <button onClick={this.reset}>Reset</button>
      </div>
    )

    return (
      <div>
        { !hasStarted && <StartState />}
        { hasStarted && !hasEnded && <ClockState /> }
        { hasEnded && <DoneState />}
      </div>
    )
  }
}
