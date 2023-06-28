import { useState, useEffect } from 'react';

export const useFullScreen = () => {
  const [isFullScreen, setIsFullScreen] = useState(
    !!document.fullscreenElement
  );

  const openFullScreen = (element: HTMLElement | null) => {
    if (element && element.requestFullscreen) {
      element.requestFullscreen();
    }
  };

  const closeFullScreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  const toggleFullScreen = (element: HTMLElement | null) => {
    if (!document.fullscreenElement) {
      openFullScreen(element);
    } else {
      closeFullScreen();
    }
  };

  useEffect(() => {
    const changeHandler = () => setIsFullScreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', changeHandler);
    return () =>
      document.removeEventListener('fullscreenchange', changeHandler);
  }, []);

  return { isFullScreen, toggleFullScreen };
};
