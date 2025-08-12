import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

import {
  Container,
  StyledCoPresentIcon,
  IconWithLabel,
  Label,
} from './SessionCounter.styled';
import Badge from '@mui/material/Badge';

const SOCKET_SERVER_URL =
  import.meta.env.VITE_BASE_URL || 'http://localhost:3000';

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
    <Container>
      <IconWithLabel>
        <Badge badgeContent={sessionCount} color="primary">
          <StyledCoPresentIcon />
        </Badge>
        <Label >
          Активные сессии
        </Label>
      </IconWithLabel>
    </Container>
  );
};
