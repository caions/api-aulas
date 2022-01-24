import { NextFunction, Request, Response } from 'express';
import logger from '../utils/winston';

export const WinstonLogger = (
  require: Request,
  response: Response,
  next: NextFunction,
) => {
  const {
    method,
    body,
    url,
    headers: { host },
  } = require;

  const baseUrl = `${host}${url}`;

  logger.debug(`${method}, ${baseUrl}, ${JSON.stringify(body)}`);

  next();
};
