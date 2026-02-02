import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import ClockFace from '../../components/clock-face';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours() % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return (
    <div className={styles.clockContainer}>
      <ClockFace hours={hours} minutes={minutes} seconds={seconds} />
      <div className={styles.timeDisplay}>{time.toLocaleTimeString('en-GB')}</div>
    </div>
  );
};

export default Clock;
