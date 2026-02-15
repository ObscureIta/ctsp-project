import { useState, useRef, useCallback } from 'react';

export const useStopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [flags, setFlags] = useState<number[]>([]);

  const intervalRef = useRef<number | null>(null);

  const start = useCallback(() => {
    if (isRunning) return;
    setIsRunning(true);

    const startTime = Date.now() - elapsed;

    intervalRef.current = setInterval(() => {
      setElapsed(Date.now() - startTime);
    }, 50);
  }, [isRunning, elapsed]);

  const stop = useCallback(() => {
    if (!isRunning) return;
    setIsRunning(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, [isRunning]);

  const reset = useCallback(() => {
    setIsRunning(false);
    setElapsed(0);
    setFlags([]);
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, []);

  const addFlag = useCallback(() => {
    if (!isRunning) return;
    setFlags((prev) => [...prev, elapsed]);
  }, [elapsed, isRunning]);

  const totalSeconds = Math.floor(elapsed / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const ms = Math.floor(elapsed % 1000);

  return { hours, minutes, seconds, ms, isRunning, start, stop, reset, addFlag, flags };
};
