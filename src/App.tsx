import { useEffect, useRef, useState } from 'react';
import Emoji from 'react-emoji-render';
import styled, { ThemeProvider, css } from 'styled-components';
import CardContainer from './components/CardContainer';
import { useFullScreen } from './hooks';
import theme from './theme';

type AppContainerProps = {
  height?: number;
};

const AppContainer = styled.div<AppContainerProps>`
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

type LargeEmojiProps = {
  text: string;
  onClick: () => void;
};

const LargeEmoji = styled(Emoji)<LargeEmojiProps>`
  font-size: 50px;
  &:hover {
    cursor: pointer;
  }
`;

export const App = () => {
  const [height, setHeight] = useState(0);
  const { toggleFullScreen } = useFullScreen();
  const myRef = useRef<HTMLDivElement>(null);

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
      <div ref={myRef} id="fullscreen-root">
        <AppContainer className="flex flex-col justify-start" height={height}>
          <Header>
            <LargeEmoji
              text="🍅"
              onClick={() => toggleFullScreen(myRef.current)}
            />
          </Header>
          <CardContainer />
        </AppContainer>
      </div>
    </ThemeProvider>
  );
};
