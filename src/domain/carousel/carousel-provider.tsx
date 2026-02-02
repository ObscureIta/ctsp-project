import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { routes } from '../../features/routesConfig';
import { computeDir, type Dir } from '../../utils/utils';
import { CarouselContext } from './context';

export const CarouselProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const len = routes.length;
  const initialIndex = Math.max(
    0,
    routes.findIndex((r) => r.path === location.pathname)
  );

  const [currentIndex, setCurrentIndex] = useState<number>(initialIndex);
  const [direction, setDirection] = useState<Dir>(0);

  const prevIndexRef = useRef<number>(initialIndex);

  const navigateTo = useCallback(
    (targetIndex: number) => {
      const normalize = (i: number) => ((i % len) + len) % len;
      const normalized = normalize(targetIndex);
      const prev = prevIndexRef.current;
      const dir = computeDir(prev, normalized, len);
      setDirection(dir);
      setCurrentIndex(normalized);
      prevIndexRef.current = normalized;
      navigate(routes[normalized].path);
    },
    [navigate, len]
  );

  const next = useCallback(() => navigateTo(currentIndex + 1), [currentIndex, navigateTo]);
  const prev = useCallback(() => navigateTo(currentIndex - 1), [currentIndex, navigateTo]);

  useEffect(() => {
    const onPop = () => {
      const pathname = window.location.pathname;
      const newIndex = Math.max(
        0,
        routes.findIndex((r) => r.path === pathname)
      );
      const prev = prevIndexRef.current;
      const dir = computeDir(prev, newIndex, len);
      setDirection(dir);
      setCurrentIndex(newIndex);
      prevIndexRef.current = newIndex;
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, [len]);

  useEffect(() => {
    const idx = routes.findIndex((r) => r.path === location.pathname);
    if (idx !== -1 && idx !== currentIndex) {
      const dir = computeDir(prevIndexRef.current, idx, len);
      setDirection(dir);
      setCurrentIndex(idx);
      prevIndexRef.current = idx;
    }
  }, [location.pathname, currentIndex, len]);

  const value = useMemo(
    () => ({ currentIndex, direction, navigateTo, next, prev }),
    [currentIndex, direction, next, prev, navigateTo]
  );

  return <CarouselContext.Provider value={value}>{children}</CarouselContext.Provider>;
};
