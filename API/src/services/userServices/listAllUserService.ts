import userRepository from 'src/repositories/UserRepository'
import User from 'src/entities/UserEntity'

class ListAllUserService {
  public async execute(): Promise<User[]> {
    const userRepo = userRepository
    //const users = await userRepo.find()
    const users = await userRepo.createQueryBuilder('user').take(10).getMany()
    return users
  }
}

export default ListAllUserService
