import express from 'express';
import 'reflect-metadata';
import 'express-async-errors';
import cors from 'cors';
import routes from './routes';
import '@shared/typeorm';
import { WinstonLogger } from '@shared/middlewares/logger';
import { HandlerError } from '@shared/middlewares/handlerError';

const app = express();

app.use(cors());
app.use(express.json());
app.use(WinstonLogger);
app.use(routes);

app.use(HandlerError);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}!`);
});
