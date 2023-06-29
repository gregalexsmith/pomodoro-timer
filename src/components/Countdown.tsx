import { useEffect, useState } from 'react';
import { mdiPlay, mdiPause } from '@mdi/js';
import { Icon } from '@mdi/react';
import styled from 'styled-components';
import Clock from './Clock';
import { Box, Button } from './lib';

const ToggleButton = styled(Button)`
  font-size: 18px;
  height: 48px;
  width: 140px;
  padding-left: 16px;
`;

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
  };

  return (
    <div className="flex flex-col items-center justify-between h-[70%]">
      <Clock timeInSeconds={time} />
      <ToggleButton onClick={togglePause} secondary={isRunning}>
        <Box className="flex items-center">
          <span className="mr-2">
            {isRunning ? (
              <Icon path={mdiPause} size={1} />
            ) : (
              <Icon path={mdiPlay} size={1} />
            )}
          </span>

          <span>{isRunning ? 'Pause' : 'Start'}</span>
        </Box>
      </ToggleButton>
    </div>
  );
};
