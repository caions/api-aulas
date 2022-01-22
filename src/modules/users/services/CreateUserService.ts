import { AppError } from '@shared/errors/appError';
import { User } from '@shared/typeorm/entities/users';
import { UserRepository } from '@shared/typeorm/repositories/UserRepository';
import { getCustomRepository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

export class CreateUserService {
  public async execute({ name, email, password }: IRequest): Promise<User> {
    const userRepository = getCustomRepository(UserRepository);

    const checkEmailAlreadyTaken = await userRepository.findByEmail(email);

    if (checkEmailAlreadyTaken) {
      throw new AppError('O Email ja foi cadastrado', 400);
    }

    const createdUser = userRepository.create({
      id: uuidv4(),
      name,
      email,
      password,
    });

    await userRepository.save(createdUser);
    return createdUser;
  }
}
