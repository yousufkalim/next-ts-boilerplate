import { useCallback, useEffect, useRef, useState } from 'react';

interface WindowSize {
  w: number;
  h: number;
}

export function useWindowSize(): WindowSize {
  const dimensions = useRef<{ w: number; h: number }>({ w: 1280, h: 800 });

  const createRuler = useCallback(() => {
    let ruler = document.createElement('div');

    ruler.style.position = 'fixed';
    ruler.style.height = '100vh';
    ruler.style.width = '0';
    ruler.style.top = '0';

    document.documentElement.appendChild(ruler);

    // Set cache conscientious of device orientation
    dimensions.current.w = window.innerWidth;
    dimensions.current.h = ruler.offsetHeight;

    // Clean up after ourselves
    document.documentElement.removeChild(ruler);

    // @ts-expect-error null
    ruler = null;
  }, []);

  // Get the actual height on iOS Safari
  const getHeight = useCallback(() => {
    const isIOS = navigator?.userAgent.match(/iphone|ipod|ipad/i);

    if (isIOS) {
      createRuler();
      return dimensions.current.h;
    }

    return window.innerHeight;
  }, [createRuler]);

  const getSize = useCallback(() => {
    return {
      w: window.innerWidth,
      h: getHeight(),
    };
  }, [getHeight]);

  const [windowSize, setWindowSize] = useState<WindowSize>(dimensions.current);

  useEffect(() => {
    const handleResize = (): void => {
      setWindowSize(getSize());
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [getSize]);

  return windowSize;
}
