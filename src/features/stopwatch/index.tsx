import Button from '../../components/button';
import ClockFace from '../../components/clock-face';
import { useStopwatch } from './hooks/use-stopwatch';
import styles from './styles.module.scss';

const Stopwatch = () => {
  const { hours, minutes, seconds, isRunning, flags, start, stop, reset, addFlag } = useStopwatch();

  return (
    <div>
      <div className={styles.clockContainer}>
        <ClockFace hours={hours} minutes={minutes} seconds={seconds} />
        <div className={styles.timeDisplay}>
          {`${hours.toString().padStart(2, '0')}:${minutes
            .toString()
            .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}
        </div>
      </div>

      <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
        <Button onClick={isRunning ? stop : start} label={isRunning ? 'stop' : 'start'} />
        <Button onClick={addFlag} disabled={!isRunning} label={'flag'} />
        <Button onClick={reset} label={'reset'} />
      </div>

      <ul>
        {flags.map((f, idx) => {
          const h = Math.floor(f / 3600);
          const m = Math.floor((f % 3600) / 60);
          const s = f % 60;
          return (
            <li
              key={idx}
            >{`${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`}</li>
          );
        })}
      </ul>
    </div>
  );
};

export default Stopwatch;
