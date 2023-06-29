import { mdiPlay } from '@mdi/js';
import { Icon } from '@mdi/react';
import styled from 'styled-components';
import { Button } from './lib';

const TimeText = styled.span`
  padding: 0 2em 0 0.8em;
  font-weight: 900;
`;

interface TimerButtonProps {
  time: number;
  onClick: () => void;
  secondary?: boolean;
}

export const TimerButton = ({ time, onClick, ...props }: TimerButtonProps) => {
  return (
    <Button onClick={onClick} {...props}>
      <div className="flex items-center">
        <Icon size={1} path={mdiPlay} />
        <TimeText className="font-button">
          <span className="text-2xl">{time}</span>min
        </TimeText>
      </div>
    </Button>
  );
};
