import { useContext } from 'react';
import { TimerContext } from './context';

export const useTimer = () => {
  const ctx = useContext(TimerContext);
  if (!ctx) throw new Error('useCarousel must be used within CarouselProvider');
  return ctx;
};
