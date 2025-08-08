import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const SOCKET_SERVER_URL =
  import.meta.env.VITE_SOCKET_SERVER_URL || 'http://localhost:4000';

export const SessionCounter: React.FC = () => {
  const [sessionCount, setSessionCount] = useState<number>(0);

  useEffect(() => {
    const socket = io(SOCKET_SERVER_URL);

    socket.on('sessionCount', (count: number) => {
      setSessionCount(count);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      Активных сессий: <strong>{sessionCount}</strong>
    </div>
  );
};
