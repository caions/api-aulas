import { AppError } from '@shared/errors/appError';
import { User } from '@shared/typeorm/entities/users';
import { IUserRepository } from '../interfaces/IUserRepository';

interface IRequest {
  id: string;
  name: string;
  email: string;
  password: string;
}

export class UpdateUserService {
  private userRepository: IUserRepository;
  constructor(Repository: IUserRepository) {
    this.userRepository = Repository;
  }
  public async execute({ id, name, email, password }: IRequest): Promise<User> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new AppError('Usuário não existe', 400);
    }

    user.email = email;
    user.name = name;
    user.password = password;
    const updatedUser = await this.userRepository.updateUser(user);
    return updatedUser;
  }
}
