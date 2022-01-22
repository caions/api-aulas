import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entities/users';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async index() {
    return await this.find();
  }

  async findById(id: string) {
    return await this.findOne({ id });
  }

  async createUser(user: User) {
    const { id, name, email, password } = user;
    return await this.save({ id, name, email, password });
  }

  async updateUser(user: User) {
    const { id, name, email, password } = user;
    await this.update({ id }, { name, email, password });
    return { user };
  }

  async deleteUser(id: string) {
    await this.delete(id);
  }
}
