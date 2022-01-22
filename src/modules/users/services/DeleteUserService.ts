import { AppError } from '@shared/errors/appError';
import { UserRepository } from '@shared/typeorm/repositories/UserRepository';
import { getCustomRepository } from 'typeorm';

export class DeleteUserService {
  public async execute(id: string): Promise<void> {
    const userRepository = getCustomRepository(UserRepository);

    const checkUserExist = await userRepository.findOne(id);

    if (!checkUserExist) {
      throw new AppError('Usuário não existe', 400);
    }

    await userRepository.delete(id);
  }
}
