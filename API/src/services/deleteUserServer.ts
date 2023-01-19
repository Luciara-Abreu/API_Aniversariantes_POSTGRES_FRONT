import userRepository from '@modules/repositories/UserRepository'
import AppError from '@shared/errors/AppError'
import { IUserType } from 'src/interfaces/User'

class DeleteUserService {
  public async execute({ id }: IUserType): Promise<void> {
    const userRepo = userRepository
    const user = await userRepo.findOneBy({ id: Number(id) })
    if (!user) {
      throw new AppError('User not found', 400)
    }
    await userRepo.remove(user)
  }
}

export default DeleteUserService
