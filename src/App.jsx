import React, { useEffect, useState } from 'react';
import Emoji from 'react-emoji-render';
import styled, { ThemeProvider, css } from 'styled-components';
import CardContainer from './components/CardContainer';
import theme from './theme';

const AppContainer = styled.div`
  height: 100vh;
  width: 100%;
  ${(props) => {
    if (props.height) {
      return css`
        max-height: ${props.height}px;
      `;
    }
  }}
`;

const Header = styled.header`
  flex: 0 0 10vh;
  display: flex;
  padding: 1rem;
  padding-bottom: 36px;
  justify-content: center;
`;

const LargeEmoji = styled(Emoji)`
  font-size: 50px;
  &:hover {
    cursor: default;
  }
`;

const App = () => {
  const [height, setHeight] = useState(0);

  const handleResize = () => {
    if (window.innerHeight !== height) {
      const newHeight = window.innerHeight > 800 ? 800 : window.innerHeight;
      setHeight(newHeight);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
    // Empty array ensures effect is only run on mount and unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <AppContainer className="flex flex-col justify-start" height={height}>
        <Header>
          <LargeEmoji text="🍅" />
        </Header>
        <CardContainer />
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
