import { Router, Express } from 'express';
import config from '../../../config/config';

// Import Routes
import peopleRoutes from './people.routes';

const routerAPI = (app: Express) => {
  const router = Router();

  const api = config.API_URL;

  app.use(api, router);

  // All Routes
  router.use('/people', peopleRoutes);

  // Return Router
  return router;
};

export default routerAPI;
