import { useEffect, useState } from 'react';
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

  return <ClockFace hours={hours} minutes={minutes} seconds={seconds} />;
};

export default Clock;
