import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { PlayIcon, PauseIcon } from 'mdi-react'
import Clock from './Clock'
import { Box, Button } from './lib'

const ToggleButton = Button.extend`
  font-size: 18px;
  height: 48px;
  width: 140px;
  padding-left: 16px;
  position: relative;
`

const ToggleIcon = styled.span`
  flex: 0 0 30px;
  position: relative;
  top: 2px;
`

const ToggleText = styled.span`
  flex: 0 0 60px;
`

const Container = Box.extend`
  height: 70%;
`

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

    return (
      <Container flex column al="center" jc="space-between">
        <Clock timeInSeconds={time}/>
        <ToggleButton 
          onClick={this.togglePause} 
          secondary
        >
          <Box flex al="center">
            <ToggleIcon>
              {isRunning ? <PauseIcon size={24} /> : <PlayIcon size={24} />}
            </ToggleIcon>
            
            <ToggleText>
              {isRunning ? "Pause" : "Start"}
            </ToggleText>
          </Box>
        </ToggleButton>
      </Container>
    )
  }
}