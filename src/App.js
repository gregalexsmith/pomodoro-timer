import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Emoji from 'react-emoji-render';
import CardContainer from './components/CardContainer'
import theme from './theme'
import { Box } from './components/lib'

const AppContainer = Box.extend`
  background: ${props => props.theme.colors.background};
  height: 100%;
  width: 100%;
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
// TODO
//for iphone safari
// window.addEventListener("resize", () => {
//   if (window.innerHeight !== this.state.innerHeight) {
//     this.setState({height: window.innerHeight})
//   }
// })

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <AppContainer flex column jc="flex-start">
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
