import userRepository from '@modules/repositories/UserRepository'
import { User } from 'src/entities/UserEntity'

class ListAllUserService {
  public async execute(): Promise<User[]> {
    const userRepo = userRepository
    const users = await userRepo.find()
    return users
  }
}

export default ListAllUserService
