import { useLocation, useRoutes } from 'react-router';
import { AnimatePresence, motion } from 'framer-motion';
import {  routesConfig } from '../../features/routesConfig';
import styles from './styles.module.scss';
import { useCarousel } from '../../domain/carousel/use-carousel-context';

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir < 0 ? 300 : -300, opacity: 0 }),
};

const AnimatedRoutes = () => {
  const location = useLocation();
  const { direction } = useCarousel();
  const element = useRoutes(routesConfig);

  return (
    <div className={styles.featureContainer}>
      <AnimatePresence mode="wait">
        {element && (
          <motion.div
            key={location.pathname}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 600, damping: 50, duration: 0.15 }, // жёстко и коротко
              opacity: { duration: 0.08 },
            }}
            className={styles.motionPage}
          >
            {element}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedRoutes;
