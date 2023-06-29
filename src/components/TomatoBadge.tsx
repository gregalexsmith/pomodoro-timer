import Emoji from 'react-emoji-render';
import { Badge } from './lib';

interface TomatoBadgeProps {
  count: number;
}

export const TomatoBadge = ({ count }: TomatoBadgeProps) => {
  return (
    <Badge>
      <Emoji text="🍅" />
      <span className="font-bold px-2">{count}</span>
    </Badge>
  );
};
