import Emoji from 'react-emoji-render';
import styled from 'styled-components';
import { Badge } from './lib';

const Count = styled.span`
  font-weight: 700;
  padding: 0 6px;
`;

interface TomatoBadgeProps {
  count: number;
}

export const TomatoBadge = ({ count }: TomatoBadgeProps) => {
  return (
    <Badge>
      <Emoji text="🍅" />
      <Count>{count}</Count>
    </Badge>
  );
};
