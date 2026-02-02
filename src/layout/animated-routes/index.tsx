import { Routes, Route, useLocation, Navigate } from 'react-router';
import { AnimatePresence, motion } from 'framer-motion';
import { routes } from '../../features/routesConfig';
import styles from './styles.module.scss';
import { useCarousel } from '../../domain/carousel/use-carousel-context';

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 1000 : -1000, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir < 0 ? 1000 : -1000, opacity: 0 }),
};

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();
  const { direction } = useCarousel();

  return (
    <div className={styles.featureContainer}>
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={location.pathname}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
        >
          <Routes location={location}>
            {routes.map((r) => (
              <Route key={r.path} path={r.path} element={r.element} />
            ))}
            <Route path="*" element={<Navigate to="/clock" replace />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedRoutes;
