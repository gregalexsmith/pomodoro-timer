import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Surface, Box, Button, H2 } from './lib'
import TomatoBadge from './TomatoBadge'

const SuccessMessage = styled.p`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: 60px;
  font-weight: 900;
`
const MessageContainer = styled.div`
  flex: 1 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: 20px;
  p {
    padding-left: 8px;
  }
`

const ButtonContainer = Box.extend`
  width: 100%;
`

const Card = Surface.extend`
  margin: 0 8px;
  height: 70%;
  border-radius: 30px;
  padding: 20px 28px;
`


const TimerContainer = Box.extend`
  height: 95%;
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
      <Card>
        <Box flex jc="space-between">
          <H2>{title}</H2>
        </Box>
        <TimerContainer flex column al="center" jc="space-around">
          <SuccessMessage>{successMessage}</SuccessMessage>
          <MessageContainer>
            <Box flex jc="flex-start" al="center">
              <TomatoBadge count={pomodoroCount}/>
              <p>{message}</p>
            </Box>
          </MessageContainer>
          <ButtonContainer flex jc="space-between">
            <Button 
              onClick={toHome}
              secondary
              p={"0.6em 2.5em"}
            >
              Home
            </Button>
            {nextButton && nextButton()}
          </ButtonContainer>
        </TimerContainer>
      </Card>
    )
  }
}