import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button, Box } from './lib'
import { PlayIcon } from 'mdi-react'

const TimeText = styled.span`
  padding: 0 2em 0 0.8em;
  font-weight: 900;
`

const Time = styled.span`
  font-size: 24px;
`

const TimerButton = ({ time, onClick, ...props}) => {
  return (
    <Button onClick={onClick} {...props}>
      <Box flex al="center">
        <PlayIcon size={34} />
        <TimeText>
          <Time>{time}</Time>min
        </TimeText>
      </Box>
    </Button>
  )
}

TimerButton.propTypes = {
  time: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default TimerButton;