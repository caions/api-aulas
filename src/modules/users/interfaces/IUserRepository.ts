import { IUser } from './IUser';

export interface IUserRepository {
  index(): Promise<IUser[]>;
  findById(id: string): Promise<IUser | undefined>;
  findByEmail(email: string): Promise<IUser | undefined>;
  createUser(user: IUser): Promise<IUser>;
  updateUser(user: IUser): Promise<IUser>;
  deleteUser(id: string): void;
}
