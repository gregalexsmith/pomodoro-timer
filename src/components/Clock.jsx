import React from 'react';
import styled from 'styled-components';

const ClockContainer = styled.div`
  font-size: 80px;
  font-weight: 900;
  font-family: sans-serif;
`;

const Clock = ({ timeInSeconds }) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  return (
    <ClockContainer>
      <span>{minutes < 10 ? '0' + minutes : minutes}</span>:
      <span>{seconds < 10 ? '0' + seconds : seconds}</span>
    </ClockContainer>
  );
};

export default Clock;
