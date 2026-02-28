export type TimerContextValue = {
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
};