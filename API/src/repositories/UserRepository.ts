import AppError from '@shared/errors/AppError'
import AppDataSource from 'src/config/data-source'
import  User  from 'src/entities/UserEntity'

const userRepository = AppDataSource.getRepository(User).extend({
  async findByNameAndDate(name: string, birthDate: Date): Promise<User | undefined> {
    const user = await this.findOne({
      where: {
        name,
        birthDate,
      },
    })
    if (!user) {
      throw new AppError('User does not exist')
    }
    return user
  },

  async findByName(name: string): Promise<User | undefined> {
    const user = await this.findOne({
      where: {
        name,
      },
    })
    if (!user) {
      throw new AppError('User does not exist')
    }
    return user
  },

  async findById(id: string): Promise<User | undefined> {
    const user = await this.findOne({
      where: {
        id,
      },
    })
        if (!user) {
      throw new AppError('User does not exist')
    }
    return user
  },

  async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.findOne({
      where: {
        email,
      },
    })
        if (!user) {
      throw new AppError('User does not exist')
    }
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
