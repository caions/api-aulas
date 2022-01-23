import { AppError } from '@shared/errors/appError';
import { User } from '@shared/typeorm/entities/users';
import { IUserRepository } from '../interfaces/IUserRepository';

export class ShowUserService {
  private userRepository: IUserRepository;
  constructor(Repository: IUserRepository) {
    this.userRepository = Repository;
  }
  public async execute(id: string): Promise<User> {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new AppError('Usuario não existe', 400);
    }
    return user;
  }
}
