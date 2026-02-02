import { useContext } from 'react';
import { CarouselContext } from './context';

export const useCarousel = () => {
  const ctx = useContext(CarouselContext);
  if (!ctx) throw new Error('useCarousel must be used within CarouselProvider');
  return ctx;
};
