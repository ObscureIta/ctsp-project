import { useCallback, useEffect, useRef, useState } from 'react';

interface UseTimerReturn {
  hours: number;
  minutes: number;
  seconds: number;
  isRunning: boolean;
  start: () => void;
  stop: () => void;
  reset: () => void;
  setHours: (h: number) => void;
  setMinutes: (m: number) => void;
  setSeconds?: (s: number) => void;
}

const clamp = (v: number, min = 0, max = Number.MAX_SAFE_INTEGER) =>
  Math.min(max, Math.max(min, Math.trunc(v)));

export const useTimer = (): UseTimerReturn => {
  const [remaining, setRemaining] = useState<number>(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const hours = Math.floor(remaining / 3600);
  const minutes = Math.floor((remaining % 3600) / 60);
  const seconds = remaining % 60;

  const setHours = useCallback((h: number) => {
    h = clamp(h, 0, 23);
    setRemaining((prev) => {
      const curM = Math.floor((prev % 3600) / 60);
      const curS = prev % 60;
      return h * 3600 + curM * 60 + curS;
    });
  }, []);

  const setMinutes = useCallback((m: number) => {
    if (m > 59) m = 59;
    m = clamp(m, 0, 59);
    setRemaining((prev) => {
      const curH = Math.floor(prev / 3600);
      const curS = prev % 60;
      return curH * 3600 + m * 60 + curS;
    });
  }, []);

  const setSeconds = useCallback((s: number) => {
    s = clamp(s, 0, 59);
    setRemaining((prev) => {
      const curH = Math.floor(prev / 3600);
      const curM = Math.floor((prev % 3600) / 60);
      return curH * 3600 + curM * 60 + s;
    });
  }, []);

  const start = useCallback(() => {
    if (isRunning) return;
    if (remaining <= 0) return;
    setIsRunning(true);

    intervalRef.current = window.setInterval(() => {
      setRemaining((prev) => {
        if (prev <= 1) {
          if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }, [isRunning, remaining]);

  const stop = useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsRunning(false);
  }, []);

  const reset = useCallback(() => {
    stop();
    setRemaining(0);
  }, [stop]);

  useEffect(() => {
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  return {
    hours,
    minutes,
    seconds,
    isRunning,
    start,
    stop,
    reset,
    setHours,
    setMinutes,
    setSeconds,
  };
};
