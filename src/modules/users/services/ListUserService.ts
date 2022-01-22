import { User } from '@shared/typeorm/entities/users';
import { UserRepository } from '@shared/typeorm/repositories/UserRepository';
import { getCustomRepository } from 'typeorm';

export class ListUserService {
  public async execute(): Promise<User[]> {
    const userRepository = getCustomRepository(UserRepository);
    const user = await userRepository.find();
    return user;
  }
}
