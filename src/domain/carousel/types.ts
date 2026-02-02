import type { Dir } from '../../utils/utils';

export type CarouselContextValue = {
  currentIndex: number;
  direction: Dir;
  isFirstElement: boolean;
  isLastElement: boolean;
  navigateTo: (targetIndex: number) => void;
  next: () => void;
  prev: () => void;
};
