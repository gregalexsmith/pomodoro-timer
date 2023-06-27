import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';
import { Box, H2 } from './lib'
import Countdown from './Countdown'
  
const CloseButton = styled(Icon).attrs({
  path: mdiClose,
})`
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
        <div className='flex justify-between items-center'>
          <H2>{title}</H2>
          <CloseButton onClick={onBack} size={'32px'} />
        </div>
        <Box className='flex flex-col items-center justify-end h-[95%]' >
          <Countdown 
            duration={duration}
            onFinish={onFinish}
          />
        </Box>
      </Box>
    )
  }
}