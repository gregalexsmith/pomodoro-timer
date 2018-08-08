import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Emoji from 'react-emoji-render';
import theme from './theme'
import BreakCard from './components/BreakCard'
import PomodoroCard from './components/PomodoroCard'
import CountdownCard from './components/CountdownCard'
import DoneCard from './components/DoneCard'
import { Button } from './components/lib';

const AppContainer = styled.div`
  background: ${props => props.theme.colors.background};
  height: 100%;
`

const CardContainer = styled.div`
  height: 100%;
  max-width: 700px;
  margin: auto;
`

const Header = styled.header`
  display: flex;
  justify-content: center;
  padding: 2rem;
`

const LargeEmoji = styled(Emoji)`
  font-size: 50px;
`

const appStates = {
  HOME: 'HOME',
  COUNTDOWN: 'COUNTDOWN',
  DONE: 'DONE'
}

class Timer {
  constructor({name, duration, successMessage, message}) {
    this.name = name;
    this.duration = duration;
    this.successMessage = successMessage;
    this.messages = message;
  }

  getMessage(count) {
    if (typeof this.messages === 'string') return this.messages;
    else if (this.messages instanceof Array && isNumeric(count)) {
      const result = this.messages[count - 1];
      return typeof result === 'string' && result || this.messages[0];
    }

    function isNumeric(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    };
  }

}
const timers = {
  pomodoro: new Timer({
    name: "Pomodoro",
    duration: 1500,
    successMessage: "Done!",
    message: [
      "Nice, thats almost enought pomodoros for some salsa!",
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


class App extends Component {
  state = {
    appState: appStates.HOME,
    timer: {},
    pomodoroCount: 0
  }
  
  startPomodoro = () => {
    this.setState({
      appState: appStates.COUNTDOWN,
      timer: timers.pomodoro
    })
  }

  startBreak = () => {
    this.setState({
      appState: appStates.COUNTDOWN,
      timer: timers.break
    })
  }

  toHome = () => {
    this.setState({appState: appStates.HOME})
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
    console.log(timer);
    const nextButton = () => {
      if (timer.name === timers.pomodoro.name) {
        return <Button onClick={this.startBreak}>5min</Button>
      } else if (timer.name === timers.break.name) {
        return <Button onClick={this.startPomodoro}>25min</Button>
      }
    }
    return (
      <ThemeProvider theme={theme}>
        <AppContainer>
          <Header>
            <LargeEmoji text="🍅"/>
          </Header>
          <CardContainer>
            { appState === appStates.HOME && 
              <React.Fragment>
                <PomodoroCard onClick={this.startPomodoro}/>
                <BreakCard onClick={this.startBreak}/>
              </React.Fragment>
            }

            { appState === appStates.COUNTDOWN &&
              <CountdownCard
                title={timer.name}
                duration={timer.duration}
                onBack={this.toHome}
                onFinish={this.onFinish}
              />
            }

            { appState === appStates.DONE &&
              <DoneCard
                title={timer.name}
                successMessage={timer.successMessage}
                message={timer.getMessage(pomodoroCount)}
                toHome={this.toHome}
                nextButton={nextButton}
                pomodoroCount={pomodoroCount}
              />
            }
          </CardContainer>
        </AppContainer>
      </ThemeProvider>
    )
  }
}

export default App;
