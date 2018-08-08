import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Surface, Box, Button } from './lib'
import TomatoBadge from './TomatoBadge'

const SuccessMessage = styled.p`
  font-size: 32px;
  font-weight: bold;
`

export default class DoneCard extends Component {  
  static propTypes = {
    title: PropTypes.string.isRequired,
    successMessage: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    toHome: PropTypes.func.isRequired,
    nextButton: PropTypes.func.isRequired,
    pomodoroCount: PropTypes.number.isRequired,
  }
  
  render() {
    const { title, successMessage, message, toHome, nextButton, pomodoroCount } = this.props;
    return (
      <Surface>
        <Box flex jc="space-between">
          <h2>{title}</h2>
        </Box>
        <Box flex jc="center">
          <SuccessMessage>{successMessage}</SuccessMessage>
        </Box>
        <p>
          <TomatoBadge count={pomodoroCount}/>
          {message}
        </p>
        <Box flex jc="space-around">
          <Button onClick={toHome}>Home</Button>
          {nextButton && nextButton()}
        </Box>
      </Surface>
    )
  }
}