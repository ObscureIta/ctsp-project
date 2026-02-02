import type { Dir } from '../../utils/utils';

export type CarouselContextValue = {
  currentIndex: number;
  direction: Dir;
  navigateTo: (targetIndex: number) => void;
  next: () => void;
  prev: () => void;
};
