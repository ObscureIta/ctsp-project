import { useTimer } from './hooks/use-timer';
import ClockFace from '../../components/clock-face';
import styles from './styles.module.scss';
import Input from '../../components/input';
import Button from '../../components/button';

const Timer = () => {
  const { hours, minutes, seconds, isRunning, start, stop, reset, setHours, setMinutes } =
    useTimer();

  return (
    <div className={styles.timerContainer}>
      <div className={styles.clockContainer}>
        <ClockFace hours={hours} minutes={minutes} seconds={seconds} />
        <div className={styles.timeDisplay}>
          {`${hours.toString().padStart(2, '0')}:${minutes
            .toString()
            .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}
        </div>
      </div>

      <div className={styles.controls}>
        <div className={styles.inputs}>
          <Input
            label={'Hours'}
            value={hours === 0 ? '' : hours}
            onChange={(e) => setHours(Number(e.target.value) || 0)}
            max={'23'}
            isDisable={isRunning}
          />
          <Input
            label={'Minutes'}
            value={minutes === 0 ? '' : minutes}
            onChange={(e) => setMinutes(Number(e.target.value) || 0)}
            max={'59'}
            isDisable={isRunning}
          />
        </div>

        <div className={styles.buttons}>
          <Button
            label={isRunning ? 'stop' : 'start'}
            onClick={isRunning ? stop : start}
            className={styles.button}
          />
          <Button label="reset" onClick={reset} className={styles.button} />
        </div>
      </div>
    </div>
  );
};

export default Timer;
