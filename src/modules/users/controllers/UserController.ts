import { Request, Response } from 'express';
import { ListUserService } from '../services/ListUserService';
import { ShowUserService } from '../services/ShowUserService';
import { CreateUserService } from '../services/CreateUserService';
import { UpdateUserService } from '../services/UpdateUserService';
import { DeleteUserService } from '../services/DeleteUserService';

export class UserControler {
  async index(request: Request, response: Response): Promise<Response> {
    const listUserService = new ListUserService();

    const user = await listUserService.execute();
    return response.status(200).json(user);
  }

  async show(request: Request, response: Response): Promise<Response> {
    const id = request.params.id;
    const showUserService = new ShowUserService();

    const user = await showUserService.execute(id);
    return response.status(200).json(user);
  }

  async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createUserService = new CreateUserService();

    const createdUser = await createUserService.execute({
      name,
      email,
      password,
    });

    return response.status(200).json(createdUser);
  }

  async update(request: Request, response: Response): Promise<Response> {
    const id = request.params.id;
    const { name, email, password } = request.body;

    const updateUserService = new UpdateUserService();

    const updatedUser = await updateUserService.execute({
      id,
      name,
      email,
      password,
    });
    return response.status(200).json(updatedUser);
  }

  async delete(request: Request, response: Response): Promise<Response> {
    const id = request.params.id;

    const deleteUserService = new DeleteUserService();

    await deleteUserService.execute(id);

    return response.end();
  }
}
