import styled from 'styled-components'
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';
import {  H2 } from './lib'
import {Countdown} from './Countdown'
  
type CloseButtonProps = {
  onClick: () => void;
}

const CloseButton = styled(Icon).attrs({
  path: mdiClose,
})<CloseButtonProps>`
  transition: 0.3s all;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`

interface CountdownCardProps {
  title: string;
  duration: number;
  onBack: () => void;
  onFinish: () => void;
}

export const CountdownContents = ({ title, duration, onBack, onFinish }: CountdownCardProps) => {
  return (
    <div className='flex flex-col flex-grow'>
      <div className='flex justify-between items-center'>
        <H2>{title}</H2>
        <CloseButton onClick={onBack} size={'32px'} />
      </div>
      <div className='flex flex-col items-center justify-end h-[95%]'>
        <Countdown 
          duration={duration}
          onFinish={onFinish}
        />
      </div>
    </div>
  )
}