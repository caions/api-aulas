import { User } from '@shared/typeorm/entities/users';
import { IUserRepository } from '../interfaces/IUserRepository';

export class ListUserService {
  private userRepository: IUserRepository;
  constructor(Repository: IUserRepository) {
    this.userRepository = Repository;
  }
  public async execute(): Promise<User[]> {
    const user = await this.userRepository.index();
    return user;
  }
}
