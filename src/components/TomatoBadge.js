import React from 'react'
import PropTypes from 'prop-types'
import Emoji from 'react-emoji-render'
import styled from 'styled-components'
import { Badge } from './lib'

const Count = styled.span`
  font-weight: 700;
  padding: 0 6px;
`

const TomatoBadge = ({ count }) => {
  return (
    <Badge>
      <Emoji text="🍅"/>
      <Count>{count}</Count>
    </Badge>
  )
}

TomatoBadge.propTypes = {
  count: PropTypes.number.isRequired,
}

export default TomatoBadge;
