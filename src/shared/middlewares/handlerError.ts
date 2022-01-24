import { AppError } from '@shared/errors/appError';
import { NextFunction, Request, Response } from 'express';
import logger from '../utils/winston';

export const HandlerError = (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  if (error instanceof AppError) {
    logger.warn(error.message);
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }

  logger.error(error.message);
  return response.status(500).json({
    status: 'error',
    message: 'Internal server Error',
  });
};
