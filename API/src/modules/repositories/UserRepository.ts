import AppDataSource from 'src/config/data-source'
import  User  from 'src/entities/UserEntity'

const userRepository = AppDataSource.getRepository(User).extend({
  findByName(name: string, birthDate: Date) {
    return this.createQueryBuilder('user').where('user.name = :name', { name }).andWhere('user.birthDate = :birthDate', { birthDate }).getMany()
  },
})

export default userRepository

// const userRepository = AppDataSource.getRepository(User)
