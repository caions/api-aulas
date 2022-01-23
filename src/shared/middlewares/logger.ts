import { NextFunction, Request, Response } from 'express';
import { format } from 'date-fns';
import winston from '../utils/winston';

export const WinstonLogger = (
  require: Request,
  response: Response,
  next: NextFunction,
) => {
  const date = format(new Date(), 'hh:mm:ss dd/MM/yyyy');
  const {
    method,
    body,
    url,
    headers: { host },
  } = require;

  const baseUrl = `${host}${url}`;

  const loggerOptions = {
    baseUrl,
    method,
    body,
    date,
  };

  winston.info(loggerOptions);

  next();
};
