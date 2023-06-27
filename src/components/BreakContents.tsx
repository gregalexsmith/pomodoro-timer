import styled from 'styled-components';
import { H3 } from './lib';
import { TimerButton } from './TimerButton';

const Message = styled.p`
  padding: 8px 0 16px;
`;

interface BreakCardProps {
  onClick: () => void;
}

export const BreakContents = ({ onClick }: BreakCardProps) => {
  return (
    <div>
      <H3>Break</H3>
      <Message>No working allowed!</Message>
      <TimerButton time={5} onClick={onClick} secondary />
    </div>
  );
};
