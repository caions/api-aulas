import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ mensage: 'Hello Caio' });
});

export default routes;
