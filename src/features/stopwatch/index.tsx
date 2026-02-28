import Button from '../../components/button';
import ClockFace from '../../components/clock-face';
import { useStopwatch } from './hooks/use-stopwatch';
import styles from './styles.module.scss';

const Stopwatch = () => {
  const { hours, minutes, seconds, isRunning, flags, start, stop, reset, addFlag } = useStopwatch();

  return (
    <div className={styles.stopwatch}>
      <ClockFace hours={hours} minutes={minutes} seconds={seconds} />

      <div className={styles.controlsAndList}>
        <div className={styles.controls}>
          <Button onClick={isRunning ? stop : start} label={isRunning ? 'stop' : 'start'} />
          <Button onClick={addFlag} disabled={!isRunning} label="flag" />
          <Button onClick={reset} label="reset" />
        </div>
        {/* TODO: Изменить симом списка*/}
        <ul className={styles.list}>
          {flags.map((f, idx) => {
            const totalSeconds = Math.floor(f / 1000);
            const h = Math.floor(totalSeconds / 3600);
            const m = Math.floor((totalSeconds % 3600) / 60);
            const s = totalSeconds % 60;
            const ms = Math.floor(f % 1000);

            return (
              <li key={idx} className={styles.el}>
                <div className={styles.elNumber}>{idx + 1 + '.'}</div>
                <div className={styles.elResult}>
                  {`${h.toString().padStart(2, '0')}:` +
                    `${m.toString().padStart(2, '0')}:` +
                    `${s.toString().padStart(2, '0')}:` +
                    `${ms.toString().padStart(3, '0')}`}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Stopwatch;
