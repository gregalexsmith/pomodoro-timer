import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button, Box } from './lib'
import Icon from '@mdi/react';
import {  mdiPlay } from '@mdi/js';

const TimeText = styled.span`
  padding: 0 2em 0 0.8em;
  font-weight: 900;
`

const Time = styled.span`
  font-size: 24px;
`

interface TimerButtonProps {
  time: number;
  onClick: () => void;
  secondary?: boolean;
}

export const TimerButton = ({ time, onClick, ...props}: TimerButtonProps) => {
  return (
    <Button onClick={onClick} {...props}>
      <div className='flex items-center'>
        <Icon size={1} path={mdiPlay} />
        <TimeText className='font-button'>
          <Time>{time}</Time>min
        </TimeText>
      </div>
    </Button>
  )
}
