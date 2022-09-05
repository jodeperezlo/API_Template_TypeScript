import { Server } from 'socket.io';

import {
  ClientToServerEvents,
  InterServerEvents,
  ServerToClientEvents,
  SocketData,
} from './interfaces';
import config from '../config/config';

export const socketIO = (server: any) => {
  const io = new Server<
    ClientToServerEvents,
    ServerToClientEvents,
    InterServerEvents,
    SocketData
  >(server, {
    pingTimeout: 60000,
    cors: {
      origin: `${config.FRONTEND_URL}:${config.FRONTEND_PORT}`,
    },
  });

  io.on('connection', (socket) => {
    socket.on('hello', () => {
      // ...
    });
  });
};
