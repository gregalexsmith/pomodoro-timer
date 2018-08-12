import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { CloseIcon } from 'mdi-react'

import { Surface, Box, H2 } from './lib'
import Countdown from './Countdown'

const CloseButton = styled(CloseIcon)`
  transition: 0.3s all;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`

const Card = Surface.extend`
  margin: 0 8px;
  height: 85%;
  border-radius: 30px;
  padding: 20px 28px 10%;
`

const TimerContainer = Box.extend`
  height: 95%;
`

export default class CountdownCard extends Component {  
  static propTypes = {
    title: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    onBack: PropTypes.func.isRequired,
  }
  
  render() {
    const { title, duration, onBack, onFinish } = this.props;
    return (
      <Card>
        <Box flex jc="space-between">
          <H2>{title}</H2>
          <CloseButton onClick={onBack} size={32} />
        </Box>
        <TimerContainer flex column al="center" jc="flex-end">
          <Countdown 
            duration={duration}
            onFinish={onFinish}
          />
        </TimerContainer>
      </Card>
    )
  }
}