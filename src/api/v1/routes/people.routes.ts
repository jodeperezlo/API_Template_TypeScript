import { Router } from 'express';
import * as personsController from '../controllers/people.controller';

const router: Router = Router();

router.route('/').get(personsController.getPeopleList);

export default router;
