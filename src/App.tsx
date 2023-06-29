import { useEffect, useState } from 'react';
import Emoji from 'react-emoji-render';
import styled, { ThemeProvider, css } from 'styled-components';
import CardContainer from './components/CardContainer';
import { SettingsMenu } from './components/SettingsMenu';
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

type LargeEmojiProps = {
  text: string;
  onClick?: () => void;
};

const LargeEmoji = styled(Emoji)<LargeEmojiProps>`
  font-size: 50px;
  &:hover {
    cursor: pointer;
  }
`;

export const App = () => {
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
      <div id="fullscreen-root">
        <div>
          <AppContainer className="flex flex-col justify-start" height={height}>
            <header className="flex p-1 pb-2 justify-center flex-grow-0 flex-shrink-0">
              <SettingsMenu>
                <span>
                  <LargeEmoji text="🍅" />
                </span>
              </SettingsMenu>
            </header>
            <CardContainer />
          </AppContainer>
        </div>
      </div>
    </ThemeProvider>
  );
};
