import React, {  useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { gsap, Power3 } from 'gsap'

import {BreakContents} from './BreakContents'
import {PomodoroContents} from './PomodoroContents'
import {CountdownContents} from './CountdownContents'
import {DoneCard} from './DoneCard'
import {TimerButton} from './TimerButton';
import Timer from '../core/Timer'
import { Box, Surface } from './lib'
import { positionInContainer } from '../core/utils'

const appStates = {
  HOME: 'HOME',
  COUNTDOWN: 'COUNTDOWN',
  DONE: 'DONE'
}

const timers = {
  pomodoro: new Timer({
    name: "Pomodoro",
    duration: 1500,
    successMessage: "Done!",
    message: [
      "Nice, thats almost enough tomatos for some salsa!",
      "2 tomatoes!",
      "3 tomatoes!",
      "4 tomatoes!",
    ]
  }),
  break: new Timer({
    name: "Break",
    duration: 300,
    successMessage: "Break's Over!",
    message: "Remember, pomodoro means tomato"
  })
}

const Container = styled.div`
  flex: 2 0 100px;
  height: 100%;
  width: 100%;
  max-width: 500px;
  margin: 0 auto 16px;
  position: relative;
`
const CardContents = styled(Box)`
  padding: 16px 20px;
  flex-grow: 1;
  display: flex;
`
const PomodoroCard = styled(Surface)`
  margin: 16px;
  margin-top: 0;
`
const BreakCard = styled(Surface)`
  margin: 16px;
  width: 50%;
`
const FullCard = styled(Surface)`
  position: absolute;
  top: 0;
  bottom: 0;
  width: calc(100% - 32px);
  margin: 0 16px;
  display: flex;
`


const CardContainer = () => {
  const [appState, setAppState] = useState(appStates.HOME)
  const [timer, setTimer] = useState({})
  const [pomodoroCount, setPomodoroCount] = useState(0)
  const [startPos, setStartPos] = useState(null)
  
  const references = useRef({
    card1: null,
    card2: null,
    cardFull: null,
    cardFullContents: null,
    container: null,
    card1Content: null,
    card2Content: null
  })

  useEffect(() => {
    const { cardFull, cardFullContents } = references.current
    if (appState !== appStates.HOME) {
      var tl = gsap.timeline()
      tl.add(
        gsap.from(
          cardFull,
          {
            x: startPos.x,
            y: startPos.y,
            height: startPos.height - 6,
            width: startPos.width - 6,
            margin: 0,
            ease: Power3.easeInOut,
            duration: 0.4,
          }
        ),
        0
      )
      tl.add(
        gsap.fromTo(
          cardFullContents, 
          { opacity: 0 },
          { opacity: 1, duration: 1 },
        ),
        0.1
      )
    }
  }, [appState, startPos])

  const setAnimationStartPosition = (startingCard) => {
    if (appState === appStates.HOME) {
      setStartPos(positionInContainer(startingCard, references.current.container))
    }
  }

  const startPomodoro = () => {
    setAnimationStartPosition(references.current.card1)
    setAppState(appStates.COUNTDOWN)
    setTimer(timers.pomodoro)
  }

  const startBreak = () => {
    setAnimationStartPosition(references.current.card2)
    setAppState(appStates.COUNTDOWN)
    setTimer(timers.break)
  }

  const toHome = () => {
    const tl = gsap.timeline()
    tl.add(
      gsap.to(
        references.current.cardFull, 
        {
          x: startPos.x,
          y: startPos.y,
          duration: 0.4,
          height: startPos.height - 6,
          width: startPos.width - 6,
          margin: 0,
          ease: Power3.easeInOut,
          onComplete: () => setAppState(appStates.HOME)
        }
      ), 
      0
    );
    tl.add(gsap.to(references.current.cardFullContents, 
        { opacity: 0, duration: 0.1 }
    ), 0)
  }

  const onFinish = () => {
    const nextCount = (timer.name === timers.pomodoro.name) ? pomodoroCount + 1 : pomodoroCount;
    setAppState(appStates.DONE)
    setPomodoroCount(nextCount)
  }

  const nextButton = () => {
    if (timer.name === timers.pomodoro.name) {
      return <TimerButton onClick={startBreak} time={5}/>
    } else if (timer.name === timers.break.name) {
      return <TimerButton onClick={startPomodoro} time={25}/>
    }
  }

  return (
    <Container
      ref={el => references.current.container = el}
    > 
      { appState === appStates.HOME && 
        <>
          <PomodoroCard ref={el => references.current.card1 = el}>
            <CardContents flex ref={el => references.current.card1Content = el}>
              <PomodoroContents onClick={startPomodoro}/>
            </CardContents>
          </PomodoroCard>
          <BreakCard ref={el => references.current.card2 = el}>
            <CardContents ref={el => references.current.card2Content = el}>
              <BreakContents onClick={startBreak}/>
            </CardContents>
          </BreakCard>
        </>
      }

      { appState === appStates.COUNTDOWN &&
        <FullCard ref={el => references.current.cardFull = el}>
          <CardContents flex ref={el => references.current.cardFullContents = el}>
            <CountdownContents
              title={timer.name}
              duration={timer.duration}
              onBack={toHome}
              onFinish={onFinish}
            />
          </CardContents>
        </FullCard>          
      }

      { appState === appStates.DONE &&
        <FullCard ref={el => references.current.cardFull = el}>
          <CardContents flex ref={el => references.current.cardFullContents = el}>
            <DoneCard
              title={timer.name}
              successMessage={timer.successMessage}
              message={timer.getMessage(pomodoroCount)}
              toHome={toHome}
              nextButton={nextButton}
              pomodoroCount={pomodoroCount}
            />
          </CardContents>
        </FullCard>
      }
    </Container>
  )
}

export default CardContainer