import app from './app';
import config from './config/config';
import { socketIO } from './socket/socketIO';

const server = app.listen(app.get('port'));

socketIO(server);

console.log(
  `Server is running on: ${config.API_PROTOCOL}://${config.API_HOST}:${app.get('port')}${
    config.API_URL
  }`
);
