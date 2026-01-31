import { Routes, Route, useLocation, Navigate } from 'react-router';
import Clock from '../../features/clock';
import Timer from '../../features/timer';
import Stopwatch from '../../features/stopwatch';
import Pomodoro from '../../features/pomodoro';
import styles from './styles.module.scss';

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <div className={styles.featureContainer}>
      <Routes location={location}>
        <Route path="/clock" element={<Clock />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
        <Route path="/pomodoro" element={<Pomodoro />} />
        <Route path="*" element={<Navigate to="/clock" replace />} />
      </Routes>
    </div>
  );
};

export default AnimatedRoutes;
