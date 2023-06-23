import React, { Component } from 'react'
import styled, { ThemeProvider, css } from 'styled-components'
import Emoji from 'react-emoji-render';
import CardContainer from './components/CardContainer'
import theme from './theme'
import { Box } from './components/lib'

const AppContainer = styled(Box)`
  height: 100vh;
  width: 100%;
  ${props => props.height && css`
    height: ${props.height}px
  `}
`

const Header = styled.header`
  flex: 0 0 10vh;
  display: flex;
  padding: 1rem;
  justify-content: center;
`

const LargeEmoji = styled(Emoji)`
  font-size: 50px;
  &:hover {
    cursor: default;
  }
`

class App extends Component {
  state = {
    height: 0
  }

  // for iphone safari
  _handleResize = () => {
    if (window.innerHeight !== this.state.innerHeight) {
      const height = window.innerHeight > 800 ? 800 : window.innerHeight;
      this.setState({height})
    }
  }

  componentDidMount() {
    this._handleResize()
    window.addEventListener('resize', this._handleResize)
  }
  componentWillUnmount = () => {
    window.removeEventListener('resize', this._handleResize);
  }
  
  render() {
    const { height } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <AppContainer flex column jc="flex-start" height={height}>
          <Header>
            <LargeEmoji text="🍅"/>
          </Header>
          <CardContainer />
        </AppContainer>
      </ThemeProvider>
    )
  }
}

export default App;
