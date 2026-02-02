import Clock from './clock';
import Timer from './timer';
import Stopwatch from './stopwatch';
import Pomodoro from './pomodoro';
import type { ReactElement } from 'react';

export type RoutesArrEl = {
  path: string;
  label: string;
  element: ReactElement;
};

export const routes = [
  { path: '/clock', label: 'clock', element: <Clock /> },
  { path: '/timer', label: 'timer', element: <Timer /> },
  { path: '/stopwatch', label: 'stopwatch', element: <Stopwatch /> },
  { path: '/pomodoro', label: 'pomodoro', element: <Pomodoro /> },
] as const;
