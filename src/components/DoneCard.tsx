import styled from 'styled-components'
import {  Button, H2 } from './lib'
import TomatoBadge from './TomatoBadge'

const SuccessMessage = styled.p`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: 60px;
  font-weight: 900;
`
const MessageContainer = styled.div`
  flex: 1 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: 20px;
  p {
    padding-left: 8px;
  }
`

interface DoneCardProps {
  title: string;
  successMessage: string;
  message: string;
  toHome: () => void;
  nextButton: () => JSX.Element;
  pomodoroCount: number;
}

export const DoneCard = ({ title, successMessage, message, toHome, nextButton, pomodoroCount }: DoneCardProps) => (
  <div className='flex flex-col flex-grow'>
    <div className='flex justify-between'>
      <H2>{title}</H2>
    </div>
    <div className='flex flex-col items-center justify-around h-[100%]'>
      <SuccessMessage>{successMessage}</SuccessMessage>
      <MessageContainer>
        <div className='flex justify-start items-center'>
          <TomatoBadge count={pomodoroCount}/>
          <p>{message}</p>
        </div>
      </MessageContainer>
      <div className='flex justify-between w-full'>
        <Button 
          onClick={toHome}
          secondary
          p={"0.6em 2.5em"}
        >
          Home
        </Button>
        {nextButton && nextButton()}
      </div>
    </div>
  </div>
);
