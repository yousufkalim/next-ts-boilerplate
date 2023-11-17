import { useEffect, useRef } from 'react';

interface UseIntervalProps {
  callback: () => void;
  delay: number;
  reset: unknown; // Adjust the type according to your needs
}

export function useInterval({ callback, delay = 1000, reset }: UseIntervalProps): void {
  const savedCallback = useRef<() => void>();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick(): void {
      savedCallback.current?.();
    }

    if (delay) {
      const id = setInterval(tick, delay);
      return () => {
        clearInterval(id);
      };
    }
  }, [delay, reset]);
}
