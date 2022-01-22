import { v4 as uuidv4 } from 'uuid';
import { User } from '@shared/typeorm/entities/users';
import { getCustomRepository } from 'typeorm';
import { UserRepository } from '@shared/typeorm/repositories/UserRepository';
import { Request, Response } from 'express';
import { AppError } from '@shared/errors/appError';

export class UserControler {
  async index(request: Request, response: Response): Promise<void> {
    const id = request.params.id;
    const userRepository = getCustomRepository(UserRepository);
    if (id) {
      const user = await userRepository.findById(id);
      response.status(200).json(user);
    } else {
      const user = await userRepository.index();
      response.status(200).json(user);
    }
  }

  async create(request: Request, response: Response): Promise<void> {
    const { name, email, password } = request.body;
    const user: User = { id: uuidv4(), name, email, password };

    const userRepository = getCustomRepository(UserRepository);
    const createdUser = await userRepository.createUser(user);

    response.status(200).json(createdUser);
  }

  async update(request: Request, response: Response): Promise<void> {
    const id = request.params.id;
    const { name, email, password } = request.body;
    const user: User = { id: uuidv4(), name, email, password };

    const userRepository = getCustomRepository(UserRepository);

    /*     const checkUserExist = await userRepository.findById(id);

    if (checkUserExist) {
      throw new AppError('Usuário não existe', 400);
    } */

    const createdUser = await userRepository.updateUser({ ...user, id: id });

    response.status(200).json(createdUser);
  }

  async delete(request: Request, response: Response): Promise<void> {
    const id = request.params.id;

    const userRepository = getCustomRepository(UserRepository);

    /*     const checkUserExist = await userRepository.findById(id);

    if (checkUserExist) {
      throw new AppError('Usuário não existe', 400);
    } */

    await userRepository.deleteUser(id);

    response.status(200).json();
  }
}
