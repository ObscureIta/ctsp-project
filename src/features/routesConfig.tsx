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
  { path: '/clock', label: 'Clock', element: <Clock /> },
  { path: '/timer', label: 'Timer', element: <Timer /> },
  { path: '/stopwatch', label: 'Stopwatch', element: <Stopwatch /> },
  { path: '/pomodoro', label: 'Pomodoro', element: <Pomodoro /> },
] as const;
