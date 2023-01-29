import AppDataSource from 'src/data-source'
import { User } from 'src/entities/UserEntity'

const userRepository = AppDataSource.getRepository(User).extend({
  async findByNameAndDate(name: string, birthDate: Date): Promise<User | null> {
    const user = await this.findOne({
      where: {
        name,
        birthDate,
      },
    })
    return user
  },

  async findByName(name: string): Promise<User | null> {
    const user = await this.findOne({
      where: {
        name,
      },
    })
    return user
  },

  async findById(id: string): Promise<User | null> {
    const user = await this.findOne({
      where: {
        id,
      },
    })
    return user
  },

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.findOne({
      where: {
        email,
      },
    })
    return user
  },
})

export default userRepository

// const userRepository = AppDataSource.getRepository(User)
/**
 *
 * const userRepository = AppDataSource.getRepository(User).extend({
  async findByName(name: string, birthDate: Date) {
    return this.createQueryBuilder('user').where('user.name = :name', { name }).andWhere('user.birthDate = :birthDate', { birthDate }).getMany()
  },
 */
