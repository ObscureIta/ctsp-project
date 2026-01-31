import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours() % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourProgress = (hours + minutes / 60) / 12;
  const minuteProgress = (minutes + seconds / 60) / 60;
  const secondProgress = seconds / 60;

  return (
    <div className={styles.clockContainer}>
      <svg viewBox="0 0 200 200" className={styles.clockSvg}>
        <circle className={styles.circleBg} cx="100" cy="100" r="90" />
        <circle
          className={styles.circleHour}
          cx="100"
          cy="100"
          r="90"
          strokeDasharray={`${2 * Math.PI * 90}`}
          strokeDashoffset={`${(1 - hourProgress) * 2 * Math.PI * 90}`}
        />
        <circle
          className={styles.circleMinute}
          cx="100"
          cy="100"
          r="75"
          strokeDasharray={`${2 * Math.PI * 75}`}
          strokeDashoffset={`${(1 - minuteProgress) * 2 * Math.PI * 75}`}
        />
        <circle
          className={styles.circleSecond}
          cx="100"
          cy="100"
          r="60"
          strokeDasharray={`${2 * Math.PI * 60}`}
          strokeDashoffset={`${(1 - secondProgress) * 2 * Math.PI * 60}`}
        />
      </svg>

      <div className={styles.timeDisplay}>{time.toLocaleTimeString('en-GB')}</div>
    </div>
  );
};

export default Clock;
