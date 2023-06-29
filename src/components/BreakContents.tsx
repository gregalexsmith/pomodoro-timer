import { H3 } from './lib';
import { TimerButton } from './TimerButton';

interface BreakCardProps {
  onClick: () => void;
}

export const BreakContents = ({ onClick }: BreakCardProps) => {
  return (
    <div>
      <H3>Break</H3>
      <p className="pt-2 pb-4">No working allowed!</p>
      <TimerButton time={5} onClick={onClick} secondary />
    </div>
  );
};
