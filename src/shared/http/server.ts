import express, { Request, Response, NextFunction, response } from 'express';
import 'reflect-metadata';
import 'express-async-errors';
import cors from 'cors';
import routes from './routes';
import { AppError } from '../errors/appError';
import '@shared/typeorm';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }
    console.log(error);
    return response.status(500).json({
      status: 'error',
      message: 'Internal server Error',
    });
  },
);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}!`);
});
