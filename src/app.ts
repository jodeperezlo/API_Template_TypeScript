import express, { Express, Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import config from './config/config';
import routerAPI from './api/v1/routes/index';
import dbConnection from './config/database';

const app: Express = express();

// Database Connection
dbConnection();

// Settings
app.set('port', config.API_PORT || 3000);

// Middlewares generales
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const api = config.API_URL;

app.get('/', (req: Request, res: Response) => {
  res.end(
    `<h1>Bienvenido Al Servidor</h1> <p>Access to <b>API REST URL:</b> <a href="${
      config.API_PROTOCOL
    }://${config.API_HOST}:${app.get('port')}${config.API_URL}">API REST Home</a></p>`
  );
});

app.get(`${api}`, (req: Request, res: Response) => {
  res.send(
    `<h1>Bienvenido a la API REST</h1> <p>Access to: <a href="${config.API_PROTOCOL}://${
      config.API_HOST
    }:${app.get('port')}${
      config.API_URL
    }/api-docs">API REST Docs</a> for more information.</p>`
  );
});

// Routes
routerAPI(app);

export default app;
