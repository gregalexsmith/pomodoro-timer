import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Emoji from 'react-emoji-render';
import theme from './theme'
import BreakCard from './components/BreakCard'
import PomodoroCard from './components/PomodoroCard'
import CountdownCard from './components/CountdownCard'
import DoneCard from './components/DoneCard'
import TimerButton from './components/TimerButton';
import Timer from './core/Timer'

const AppContainer = styled.div`
  background: ${props => props.theme.colors.background};
  height: 100%;
`

const CardContainer = styled.div`
  height: 100%;
  max-width: 500px;
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
        return <TimerButton onClick={this.startBreak} time={5}/>
      } else if (timer.name === timers.break.name) {
        return <TimerButton onClick={this.startPomodoro} time={25}/>
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
