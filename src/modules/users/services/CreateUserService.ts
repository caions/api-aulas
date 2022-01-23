import { AppError } from '@shared/errors/appError';
import { User } from '@shared/typeorm/entities/users';
import { v4 as uuidv4 } from 'uuid';
import { IUserRepository } from '../interfaces/IUserRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

export class CreateUserService {
  private userRepository: IUserRepository;
  constructor(Repository: IUserRepository) {
    this.userRepository = Repository;
  }
  public async execute({ name, email, password }: IRequest): Promise<User> {
    const checkEmailAlreadyTaken = await this.userRepository.findByEmail(email);

    if (checkEmailAlreadyTaken) {
      throw new AppError('O Email ja foi cadastrado', 400);
    }

    const createdUser = this.userRepository.createUser({
      id: uuidv4(),
      name,
      email,
      password,
    });

    return createdUser;
  }
}
