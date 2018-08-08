import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Surface, Box, Button } from './lib'
import Countdown from './Countdown'

export default class CountdownCard extends Component {  
  static propTypes = {
    title: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    onBack: PropTypes.func.isRequired,
  }
  
  render() {
    const { title, duration, onBack, onFinish } = this.props;
    return (
      <Surface>
        <Box flex jc="space-between">
          <h2>{title}</h2>
          <Button onClick={onBack}>X</Button>
        </Box>
        <Box flex al="center" jc="center">
          <Countdown 
            duration={duration}
            onFinish={onFinish}
          />
        </Box>
      </Surface>
    )
  }
}