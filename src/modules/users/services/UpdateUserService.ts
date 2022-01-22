import { AppError } from '@shared/errors/appError';
import { User } from '@shared/typeorm/entities/users';
import { UserRepository } from '@shared/typeorm/repositories/UserRepository';
import { getCustomRepository } from 'typeorm';

interface IRequest {
  id: string;
  name: string;
  email: string;
  password: string;
}

export class UpdateUserService {
  public async execute({ id, name, email, password }: IRequest): Promise<User> {
    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findOne(id);

    if (!user) {
      throw new AppError('Usuário não existe', 400);
    }

    user.email = email;
    user.name = name;
    user.password = password;
    const updatedUser = await userRepository.save(user);
    return updatedUser;
  }
}
