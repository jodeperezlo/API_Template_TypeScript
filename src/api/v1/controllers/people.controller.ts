import { RequestHandler } from 'express';
import boom from '@hapi/boom';

import * as peopleServices from '../services/people.service';

export const getPeopleList: RequestHandler = async (req, res, next) => {
  try {
    const id: string = req.query.id as string;
    const peopleList = await peopleServices.getPeopleList(id);
    if (!peopleList) {
      next(boom.notFound('No se encontraron registros.'));
    } else if (peopleList) {
      res.status(200).json(peopleList);
    }
  } catch (error) {
    next(error);
  }
};
