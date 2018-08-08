import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Clock from './Clock'
import { Box, Button } from './lib'

export default class Countdown extends Component {  
  static propTypes = {
    duration: PropTypes.number.isRequired,
    onFinish: PropTypes.func.isRequired,
  }
  
  constructor(props) {
    super(props);
    this.state = {
      time: props.duration,
      isRunning: false,
      hasEnded: false
    }
  }

  componentDidMount() {
    this.start();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  start = () => {
    if (this.state.isRunning) return;
    this.setState({isRunning: true})
    this.interval = setInterval(this.handleInterval, 1000)
  }

  handleInterval = () => {
    const { onFinish } = this.props;
    var nextTime = this.state.time - 1;
    if (nextTime > 0) {
      this.setState({time: this.state.time - 1})
    } else {
      this.setState({time: 0, isRunning: false, hasEnded: true})
      clearInterval(this.interval);
      onFinish && onFinish();
    }
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
    const { time, isRunning } = this.state;

    const ToggleButton = () => (
      <Button onClick={this.togglePause}>
        {isRunning ? "Pause" : "Start"}
      </Button>
    )

    return (
      <Box textCenter>
        <Clock timeInSeconds={time}/>
        <ToggleButton />
      </Box>
    )
  }
}