import { AppError } from '@shared/errors/appError';
import { IUserRepository } from '../interfaces/IUserRepository';

export class DeleteUserService {
  private userRepository: IUserRepository;
  constructor(Repository: IUserRepository) {
    this.userRepository = Repository;
  }
  public async execute(id: string): Promise<void> {
    const checkUserExist = await this.userRepository.findById(id);

    if (!checkUserExist) {
      throw new AppError('Usuário não existe', 400);
    }

    await this.userRepository.deleteUser(id);
  }
}
