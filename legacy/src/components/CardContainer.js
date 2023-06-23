import React, { Component } from 'react'
import styled from 'styled-components'
import { TweenLite, TimelineLite, Power3 } from 'gsap'

import BreakContents from './BreakContents'
import PomodoroContents from './PomodoroContents'
import CountdownContents from './CountdownContents'
import DoneContents from './DoneContents'
import TimerButton from './TimerButton';
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
const CardContents = Box.extend`
  padding: 16px 20px;
  flex-grow: 1;
  display: flex;
`
const PomodoroCard = Surface.extend`
  margin: 16px;
  margin-top: 0;
`
const BreakCard = Surface.extend`
  margin: 16px;
  width: 50%;
`
const FullCard = Surface.extend`
  position: absolute;
  top: 0;
  bottom: 0;
  width: calc(100% - 32px);
  margin: 0 16px;
  display: flex;
`

export default class CardContainer extends Component {
  constructor() {
    super();
    this.references = {};
    this.startPos = null;
    this.tabTitle = null;
    this.state = {
      appState: appStates.HOME,
      timer: {},
      pomodoroCount: 0,
    }
  }

  componentDidMount = () => {
    this.setState({height: window.innerHeight})
  }

  componentDidUpdate(prevProps, prevState) {
    const { appState } = this.state;
    const { startPos } = this;
    
    if (appState !== appStates.HOME && prevState.appState === appStates.HOME ) {
      var tl = new TimelineLite();
      tl.add(
        TweenLite.from(
          this.references.cardFull,
          0.4,
          {
            x: startPos.x,
            y: startPos.y,
            height: startPos.height - 6,
            width: startPos.width - 6,
            margin: 0,
            ease: Power3.easeInOut
          }
        ),
        0
      );
      tl.add(
        TweenLite.fromTo(this.references.cardFullContents, 1,
          { opacity: 0 },
          { opacity: 1 },
        ),
        0.1
      );
    }
  }

  _setAnimationStartPosition(startingCard) {
    const { appState } = this.state;
    if (appState === appStates.HOME) {
      this.startPos = positionInContainer(startingCard, this.references.container);
      console.log(this.startPos);
    }
  }

  startPomodoro = () => {
    this._setAnimationStartPosition(this.references.card1);
    this.setState({
      appState: appStates.COUNTDOWN,
      timer: timers.pomodoro
    })
  }

  startBreak = () => {
    this._setAnimationStartPosition(this.references.card2);
    this.setState({
      appState: appStates.COUNTDOWN,
      timer: timers.break
    })
  }

  toHome = () => {
    const { startPos } = this
    const tl = new TimelineLite();

    tl.add(
      TweenLite.to(
        this.references.cardFull, 
        0.4, 
        {
          x: startPos.x,
          y: startPos.y,
          height: startPos.height - 6,
          width: startPos.width - 6,
          margin: 0,
          ease: Power3.easeInOut,
          onComplete: () => this.setState({appState: appStates.HOME})
        }
      ), 
      0
    );
    tl.add(TweenLite.to(this.references.cardFullContents, 
        0.1, 
        { opacity: 0 }
    ), 0)
  }

  onFinish = () => {
    const { pomodoroCount, timer } = this.state;
    const nextCount = (timer.name === timers.pomodoro.name) ? pomodoroCount + 1 : pomodoroCount;
    this.setState({
      appState: appStates.DONE,
      pomodoroCount: nextCount
    })
  }

  render() {
    const { appState, timer, pomodoroCount } = this.state;
    
    const nextButton = () => {
      if (timer.name === timers.pomodoro.name) {
        return <TimerButton onClick={this.startBreak} time={5}/>
      } else if (timer.name === timers.break.name) {
        return <TimerButton onClick={this.startPomodoro} time={25}/>
      }
    }
    return (
      <Container
        innerRef={el => this.references.container = el}
      > 
        { appState === appStates.HOME && 
          <React.Fragment>
            <PomodoroCard innerRef={el => this.references.card1 = el}>
              <CardContents flex innerRef={el => this.references.card1Content = el}>
                <PomodoroContents onClick={this.startPomodoro}/>
              </CardContents>
            </PomodoroCard>
            <BreakCard innerRef={el => this.references.card2 = el}>
              <CardContents innerRef={el => this.references.card2Content = el}>
                <BreakContents onClick={this.startBreak}/>
              </CardContents>
            </BreakCard>
          </React.Fragment>
        }

        { appState === appStates.COUNTDOWN &&
          <FullCard innerRef={el => this.references.cardFull = el}>
            <CardContents flex innerRef={el => this.references.cardFullContents = el}>
              <CountdownContents
                title={timer.name}
                duration={timer.duration}
                onBack={this.toHome}
                onFinish={this.onFinish}
              />
            </CardContents>
          </FullCard>          
        }

        { appState === appStates.DONE &&
          <FullCard innerRef={el => this.references.cardFull = el}>
            <CardContents flex innerRef={el => this.references.cardFullContents = el}>
              <DoneContents
                title={timer.name}
                successMessage={timer.successMessage}
                message={timer.getMessage(pomodoroCount)}
                toHome={this.toHome}
                nextButton={nextButton}
                pomodoroCount={pomodoroCount}
              />
            </CardContents>
          </FullCard>
        }
      </Container>
    )
  }
}
