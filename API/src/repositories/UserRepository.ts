import AppDataSource from 'src/config/data-source'
import  User  from 'src/entities/UserEntity'

const userRepository = AppDataSource.getRepository(User).extend({
  async findByName(name: string): Promise<User | null> {
    const user = await this.findOneBy({ name  })
    return user
  },

  async findById(id: string): Promise<User | null> {
    const user = await this.findOneBy({ id})
    return user
  },

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.findOneBy({ email  })
    return user
  },
})

export default userRepository


/** Dessa forma tras o objeto inteiro.
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
 */
