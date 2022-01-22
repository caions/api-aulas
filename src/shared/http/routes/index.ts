import { Router } from 'express';
import UserRoute from '../../../modules/users/routes/UserRoute';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ mensage: 'Hello Caio' });
});

routes.use('/user', UserRoute);

export default routes;
