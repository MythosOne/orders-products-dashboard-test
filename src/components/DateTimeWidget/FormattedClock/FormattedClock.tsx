import { useEffect, useState } from 'react';
import { CurrentTime } from '@/components/DateTimeWidget/FormattedClock/FormattedClock.styled';

type ClockProps = {
  timeZoneOffset: number;
};

export const FormattedClock = ({ timeZoneOffset }: ClockProps) => {
  const [currentTime, setCurrentTime] = useState({
    localTime: new Date(),
    withOffsetTime: new Date(),
  });

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
      const timeWithOffset = new Date(utcTime + timeZoneOffset * 1000);

      setCurrentTime({
        localTime: now,
        withOffsetTime: timeWithOffset,
      });
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timeZoneOffset]);

  return (
    <>
      <CurrentTime>
        {currentTime.localTime.toLocaleTimeString('ru-RU', {
          hour: '2-digit',
          minute: '2-digit',
        })}
      </CurrentTime>
    </>
  );
};
