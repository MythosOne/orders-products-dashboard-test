import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const SOCKET_SERVER_URL =
  import.meta.env.VITE_SOCKET_SERVER_URL || 'http://localhost:3001';

export const SessionCounter: React.FC = () => {
  const [sessionCount, setSessionCount] = useState<number>(0);

  useEffect(() => {
    const socket = io(SOCKET_SERVER_URL);

    socket.on('activeSessionsUpdate', (count: number) => {
      setSessionCount(count);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div style={{ color: '#93BE56' }}>
      Активных сессий: <strong>{sessionCount}</strong>
    </div>
  );
};
