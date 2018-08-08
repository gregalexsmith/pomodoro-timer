import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Surface, Button } from './lib'

const OrderedList = styled.ol`
  list-style-position: inside;
`

const PomodoroCard = ({ onClick }) => {
  return (
    <Surface>
      <h2>Pomodoro</h2>
      <OrderedList>
        <li>An interval of time spent dedicated to one task.</li>
        <li>The Italian word for <i>Tomato</i></li>
      </OrderedList>
      <Button onClick={onClick}>
        25min
      </Button>
    </Surface>
  )
}

PomodoroCard.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default PomodoroCard;
