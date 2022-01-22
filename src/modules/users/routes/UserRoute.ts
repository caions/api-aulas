import { Router } from 'express';
import { UserControler } from '../controllers/UserController';

const routes = Router();

const userControler = new UserControler();

routes.get('/', userControler.index);
routes.get('/:id', userControler.index);
routes.post('/', userControler.create);
routes.put('/:id', userControler.update);
routes.delete('/:id', userControler.delete);

export default routes;
