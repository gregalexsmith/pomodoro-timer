import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { CloseIcon } from 'mdi-react'

import { Box, H2 } from './lib'
import Countdown from './Countdown'

const CloseButton = styled(CloseIcon)`
  transition: 0.3s all;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
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
      <Box flex column flexGrow>
        <Box flex jc="space-between">
          <H2>{title}</H2>
          <CloseButton onClick={onBack} size={32} />
        </Box>
        <Box flex column al="center" jc="flex-end" height="95%">
          <Countdown 
            duration={duration}
            onFinish={onFinish}
          />
        </Box>
      </Box>
    )
  }
}