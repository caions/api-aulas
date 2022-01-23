import { AppError } from '@shared/errors/appError';
import { NextFunction, Request, Response } from 'express';
import winston from '../utils/winston';

export const HandlerError = (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  if (error instanceof AppError) {
    winston.log('warn', error.message);
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }

  winston.log('error', error.message);
  return response.status(500).json({
    status: 'error',
    message: 'Internal server Error',
  });
};
