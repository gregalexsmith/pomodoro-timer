import React, { Component, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Icon from '@mdi/react';
import {  mdiPlay, mdiPause } from '@mdi/js';
import Clock from './Clock'
import { Box, Button } from './lib'

const ToggleButton = styled(Button)`
  font-size: 18px;
  height: 48px;
  width: 140px;
  padding-left: 16px;
  position: relative;
`

const ToggleIcon = styled.span`
  flex: 0 0 30px;
  position: relative;
  top: 2px;
`

const ToggleText = styled.span`
  flex: 0 0 60px;
`

interface CountdownProps {
  duration: number;
  onFinish: () => void;
}

export const Countdown = ({ duration, onFinish }: CountdownProps) => {
  const [time, setTime] = useState(duration);
  const [isRunning, setIsRunning] = useState(true);
  const [hasEnded, setHasEnded] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let interval: any;
    
    if (isRunning && !hasEnded) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning, hasEnded]);

  useEffect(() => {
    if (time === 0) {
      setIsRunning(false);
      setHasEnded(true);
      onFinish();
    }
  }, [time, onFinish]);


  const togglePause = () => {
    setIsRunning(!isRunning);
  }

  return (
    <div className='flex flex-col items-center justify-between h-[70%]'>
      <Clock timeInSeconds={time} />
      <ToggleButton 
        onClick={togglePause} 
        secondary={isRunning}
      >
        <Box className='flex items-center'>
          <ToggleIcon>
            {isRunning ? <Icon path={mdiPause} size={1} /> : <Icon path={mdiPlay} size={1} />}
          </ToggleIcon>
          
          <ToggleText>
            {isRunning ? "Pause" : "Start"}
          </ToggleText>
        </Box>
      </ToggleButton>
    </div>
  );
}
