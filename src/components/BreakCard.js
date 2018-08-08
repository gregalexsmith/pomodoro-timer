import React from 'react'
import PropTypes from 'prop-types'
import { Surface, Button } from './lib'

const BreakCard = ({onClick}) => {
  return (
    <Surface>
      <h2>Break</h2>
      <p>No working allowed!</p>
      <Button onClick={onClick}>5min</Button>
    </Surface>
  )
}

BreakCard.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default BreakCard;
