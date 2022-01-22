import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entities/users';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  public async findByEmail(email: string): Promise<User | undefined> {
    return await this.findOne({ where: { email } });
  }
}
