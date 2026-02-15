import styles from './styles.module.scss';

type ClockFaceProps = {
  hours: number; // 0-12
  minutes: number; // 0-59
  seconds: number; // 0-59
};

const ClockFace: React.FC<ClockFaceProps> = ({ hours, minutes, seconds }) => {
  const hourProgress = (hours + minutes / 60) / 12;
  const minuteProgress = (minutes + seconds / 60) / 60;
  const secondProgress = seconds / 60;

  return (
    <div className={styles.container}>
      <svg viewBox="0 0 200 200" className={styles.clockSvg}>
        <circle className={styles.circleBgHour} cx="100" cy="100" r="90" />
        <circle className={styles.circleBgMinute} cx="100" cy="100" r="75" />
        <circle className={styles.circleBgSecond} cx="100" cy="100" r="60" />

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
      <div className={styles.timeDisplay}>
        {`${hours.toString().padStart(2, '0')}:${minutes
          .toString()
          .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}
      </div>
    </div>
  );
};

export default ClockFace;
