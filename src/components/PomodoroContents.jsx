import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { H2, Link } from './lib'
import TimerButton from './TimerButton'

const OrderedList = styled.ol`
  right: 8px;
  position: relative;
  left: 16px;
  padding: 4px 16px 8px 0;
  list-style-type: decimal;
  li {
    padding-bottom: 4px;
    padding-left: 4px;
  }
`

const PomodoroContents = ({ onClick }) => {
  return (
    <div>
      <H2 className='mb-1'>Pomodoro</H2>
      <OrderedList>
        <li>
          An interval of time dedicated to one task.
          &nbsp;
          <Link 
            href="https://en.wikipedia.org/wiki/Pomodoro_Technique"
            target="_blank"
            rel="noopener"
          >
            Learn more
          </Link>
        </li>
        <li>The Italian word for <i>tomato</i></li>
      </OrderedList>
      <TimerButton onClick={onClick} time={25} />
    </div>
  )
}

PomodoroContents.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default PomodoroContents;
