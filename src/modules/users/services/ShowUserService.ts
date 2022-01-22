import { AppError } from '@shared/errors/appError';
import { User } from '@shared/typeorm/entities/users';
import { UserRepository } from '@shared/typeorm/repositories/UserRepository';
import { getCustomRepository } from 'typeorm';

export class ShowUserService {
  public async execute(id: string): Promise<User> {
    const userRepository = getCustomRepository(UserRepository);
    const user = await userRepository.findOne(id);
    if (!user) {
      throw new AppError('Usuario não existe', 400);
    }
    return user;
  }
}
