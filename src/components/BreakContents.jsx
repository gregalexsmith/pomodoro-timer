import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { H3 } from './lib'
import TimerButton from './TimerButton'

const Message = styled.p`
  padding: 8px 0 16px;
`

const BreakCard = ({onClick}) => {
  return (
    <div>
      <H3>Break</H3>
      <Message>No working allowed!</Message>
      <TimerButton
        time={5}
        onClick={onClick} 
        secondary
      />
    </div>
  )
}

BreakCard.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default BreakCard;
