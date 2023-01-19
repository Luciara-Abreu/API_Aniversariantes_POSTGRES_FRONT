import userRepository from '@modules/repositories/UserRepository'
import AppError from '@shared/errors/AppError'
import { User } from 'src/entities/UserEntity'
import { IUserType } from 'src/interfaces/User'

class ListOneUserService {
  public async execute({ id }: IUserType): Promise<User> {
    const userRepo = userRepository
    const user = await userRepo.findOneBy({ id: Number(id) })
    if (!user) {
      throw new AppError('User not found', 400)
    }
    return user
  }
}

export default ListOneUserService
