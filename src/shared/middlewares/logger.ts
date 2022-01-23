import { NextFunction, Request, Response } from 'express';
import winston from 'winston';
import { format } from 'date-fns';

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

  const logMessage = {
    baseUrl,
    method,
    body,
    date,
  };

  winston.log('debug', logMessage);
  next();
};
