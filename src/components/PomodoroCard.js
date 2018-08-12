import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Surface, H2 } from './lib'
import TimerButton from './TimerButton'

const OrderedList = styled.ol`
  right: 8px;
  position: relative;
  left: 16px;
  padding: 4px 16px 8px 0;
  li {
    padding-bottom: 8px;
    padding-left: 4px;
  }
`
const Card = Surface.extend`
  margin: 16px;
  margin-top: 0;
`

const PomodoroCard = ({ onClick }) => {
  return (
    <Card>
      <H2 mb={"8px"}>Pomodoro</H2>
      <OrderedList>
        <li>An interval of time spent dedicated to one task.</li>
        <li>The Italian word for <i>tomato</i></li>
      </OrderedList>
      <TimerButton onClick={onClick} time={25} />
    </Card>
  )
}

PomodoroCard.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default PomodoroCard;
